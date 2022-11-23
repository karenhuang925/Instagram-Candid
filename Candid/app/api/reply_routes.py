from flask import Blueprint, jsonify, request
from flask_login import current_user
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Follower, Post, User, Reply

reply_routes = Blueprint('reply', __name__)

# Get all replies under the comment
@reply_routes.route('/comments/<int:id>/replies')
def get_replies_for_comment(id):

    replies = Reply.query.filter(Reply.comment_id == id).options(joinedload(Reply.user).options(load_only('id', 'username', 'preview_image'))).all()
    
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
def edit_reply(id):
    
    edit_reply = request.json['reply']

    reply = Reply.query.filter(Reply.id == id).first()
    
    reply.reply = edit_reply

    db.session.commit()

    return reply.to_dict()


# Delete a Reply
@reply_routes.route('/replies/<int:id>', methods=["DELETE"])
def delete_reply(id):
    
    reply = Reply.query.filter(Reply.id == id).first()
    
    db.session.delete(reply)
    db.session.commit()

    return {
        "message": "Successfully deleted",
        "statusCode": 404
    }
