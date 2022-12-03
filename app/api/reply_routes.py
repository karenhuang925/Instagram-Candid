from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Reply, User

reply_routes = Blueprint('reply', __name__)

#Still Need to:
    # Need to return Replies ordered by date
    # Test Create, Edit, Delete routes and adjust code - 
    # Include Authenticate/Authorization capability - 
        # Need to make sure user is logged in in order to be complete requests
        # Need to make sure query exists
        # Need to make sure user owns post and authorized to make changes
    # Provide Validation and Error handling - Will Complete on Front End

# Get all replies under the comment
@reply_routes.route('/comments/<int:id>/replies')
def get_replies_for_comment(id):

    replies = Reply.query.filter(id == Reply.comment_id).options(joinedload(Reply.user).options(load_only('id', 'username', 'preview_image'))).order_by(Reply.created_at).all()
    if not replies:
        return {
            "message": "Replies couldn't be found",
            "statusCode": 404
            }, 404 

    return {
        "Replies" : [
            {
                "id": reply.id,
                "comment_id": reply.comment_id,
                "user_id": reply.user_id,
                "reply": reply.reply,
                "created_at": reply.created_at,
                "updated_at": reply.updated_at,
                "Owner": {
                    "id": reply.user.id,
                    "username": reply.user.username,
                    "previewImage": reply.user.preview_image
                }
            } for reply in replies
        ]
    }


# Create a Reply under the comment
@reply_routes.route('/comments/<int:id>/replies', methods=["POST"])
@login_required
def create_new_reply(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    user_reply = request.json['reply']
    
    new_reply = Reply(
        user_id = user_id,
        comment_id = id,
        reply = user_reply
    )

    db.session.add(new_reply)
    db.session.commit()

    return new_reply.to_dict()

# Edit a Reply
@reply_routes.route('/replies/<int:id>', methods=["PUT"])
@login_required
def edit_reply(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']
    
    edit_reply = request.json['reply']

    reply = Reply.query.filter(id == Reply.id).one_or_none()
    if not reply:
        return {
            "message": "Reply couldn't be found",
            "statusCode": 404
            }, 404

    if not (reply.user_id == user_id):
        return {
            "message": "Forbidden",
            "statusCode": 403
            }, 403
    
    reply.reply = edit_reply

    db.session.commit()

    return reply.to_dict()


# Delete a Reply
@reply_routes.route('/replies/<int:id>', methods=["DELETE"])
@login_required
def delete_reply(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']
    
    reply = Reply.query.filter(id == Reply.id).one_or_none()
    if not reply:
        return {
            "message": "Reply couldn't be found",
            "statusCode": 404
            }, 404

    if not (reply.user_id == user_id):
        return {
            "message": "Forbidden",
            "statusCode": 403
            }, 403
    
    db.session.delete(reply)
    db.session.commit()

    return {
        "message": "Successfully deleted",
        "statusCode": 200
    }
