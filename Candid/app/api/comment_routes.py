from flask import Blueprint, request
from flask_login import login_required
from app.models import db, User, Post, Follower, Comment

comment_routes = Blueprint('comment', __name__)

#Get all Comments by a Post's id
@comment_routes.route('/posts/<int:id>/comments', methods=['GET'])
def get_comments_by_post_id(id):
    # comments = Comment.query.join(Reply, Post.id == Comment.post_id).add_columns(Comment.post_id).filter(Comment.post_id == id).all()
    comments = Comment.query.filter(Comment.post_id == id).all()
    return {'Comments' : [comment.to_dict() for comment in comments]}

    # userList = users.query\
    # .join(friendships, users.id==friendships.user_id)\
    # .add_columns(users.userId, users.name, users.email, friends.userId, friendId)\
    # .filter(users.id == friendships.friend_id)\
    # .filter(friendships.user_id == userID)\
    # .paginate(page, 1, False)