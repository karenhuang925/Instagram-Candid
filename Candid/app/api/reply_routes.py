from flask import Blueprint, jsonify, request
from flask_login import current_user
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Follower, Post, User, Reply

reply_routes = Blueprint('reply', __name__)

# Get all replies under the comment
@reply_routes.route('/comments/<int:id>/replies')
def get_replies_for_comment(id):

    replies = Reply.query.filter(Reply.comment_id == id).options(joinedload(Reply.user).options(load_only('id', 'username', 'preview_image'))).all()
    pass


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