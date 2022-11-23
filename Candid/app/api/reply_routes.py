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

# {
#   "Replies": [
#     {
#       "id": 1,
#       "comment_id": 1,
#       "user_id":1,
#       "reply": "@Abc thank you for your comments"
#       "created_at": "2021-11-19 20:39:36",
#       "updated_at": "2021-11-19 20:39:36",
#       "Owner": {
#         "id": 1,
#         "username": "JohnSmith",
#         "preview_image": "image url"
#       }
#     }
#   ]
# }


# Create a Reply under the comment
@reply_routes.route('/comments/<int:id>/replies')
def create_new_reply(id):
    pass
# Edit a Reply
@reply_routes.route('/replies/<int:id>')
def edit_reply(id):
    pass
# Delete a Reply
@reply_routes.route('/replies/<int:id>')
def delete_reply(id):
    pass