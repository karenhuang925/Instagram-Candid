from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Comment, Post

comment_routes = Blueprint('comment', __name__)

def authorization_required(callback):
    def wrapper(comment_id):
        user_id = current_user.get_id()
        comment = Post.query.get(comment_id)
        if user_id != comment.user_id:
            return { "errors": ["Authorization required"] }, 404
        return callback(comment_id)
    return wrapper


@comment_routes.route('/posts/<int:post_id>/comments', methods=['GET'])
def get_comments_by_post_id(post_id):
    if not Post.query.get(post_id):
        return { "errors": ["Post not found"] }, 404
    comments = Comment.query.filter(Comment.post_id == post_id).all()
    return {'Comments' : [comment.to_dict() for comment in comments]}


@comment_routes.route('/posts/<int:post_id>/comments', methods=['POST'])
@login_required
def post_comment_by_post_id(post_id):
    user_id = current_user.get_id()
    if not Post.query.get(post_id):
        return { "errors": ["Post not found"] }, 404
    comment_data = {
        "user_id": user_id,
        "post_id": post_id,
        "comment": request.json["comment"]
    }
    new_comment = Comment(**comment_data)
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()


@comment_routes.route('/comments/<int:comment_id>', methods=['PUT'])
@login_required
def edit_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if not comment:
        return { "errors": ["Comment not found"] }, 404
    user_id = current_user.get_id()
    if user_id != comment.user_id:
        return { "errors": ["Authorization required"] }, 403
    comment.comment = request.json["comment"]
    db.session.commit()
    return comment.to_dict()


@comment_routes.route('/comments/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if not comment:
        return { "errors": ["Comment not found"] }, 404
    user_id = current_user.get_id()
    if user_id != comment.user_id:
        return { "errors": ["Authorization required"] }, 403
    db.session.delete(comment)
    db.session.commit()
    return { "message": "Comment successfully deleted"}