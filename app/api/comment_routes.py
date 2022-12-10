from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Comment, Post, Reply
from sqlalchemy.orm import joinedload, load_only
from sqlalchemy.sql.expression import func

comment_routes = Blueprint('comment', __name__)

def authorization_required(callback):
    def wrapper(comment_id):
        user_id = current_user.get_id()
        comment = Post.query.get(comment_id)
        if user_id != comment.user_id:
            return { "errors": ["Authorization required"] }, 404
        return callback(comment_id)
    return wrapper


# Get all Comments by a Post's Id
@comment_routes.route('/posts/<int:post_id>/comments', methods=['GET'])
def get_comments_by_post_id(post_id):
    if not Post.query.get(post_id):
        return { "errors": ["Post not found"] }, 404
    comments = Comment.query.filter(Comment.post_id == post_id).options(\
        joinedload(Comment.user).options(load_only('id','username', 'preview_image')),\
        joinedload(Comment.replies).options(load_only('id','comment_id'))\
        ).all()
    # return {'Comments' : [comment.to_dict() for comment in comments]}

    comments_plus_users = []
    for comment in comments:
        repliesCount = db.session.query(func.count(Reply.id)).filter(comment.id == Reply.comment_id).scalar()
        if not repliesCount:
                repliesCount = 0

        returnComment = {
            "id": comment.id,
            "user_id": comment.user_id,
            "comment":comment.comment,
            "created_at": comment.created_at,
            "updated_at": comment.updated_at,
            "numOfReplies": repliesCount,
            "Owner": {
                "id": comment.user.id,
                "username": comment.user.username,
                "preview_image": comment.user.preview_image
            }
        }
        comments_plus_users.append(returnComment)
    return {"Comments" : [comment for comment in comments_plus_users]}


# Create a Comment for a Post based on the Post's Id
@comment_routes.route('/posts/<int:post_id>/comments', methods=['POST'])
@login_required
def post_comment_by_post_id(post_id):
    user_id = current_user.get_id()
    if not Post.query.get(post_id):
        return { "errors": ["Post not found"] }, 404
    print(request.json)
    comment_data = {
        "user_id": user_id,
        "post_id": post_id,
        "comment": request.json
    }
    new_comment = Comment(**comment_data)
    db.session.add(new_comment)
    db.session.commit()

    addedComment = new_comment.to_dict()

    comment = Comment.query.filter(addedComment['id'] == Comment.id).options(\
        joinedload(Comment.user).options(load_only('id','username', 'preview_image')),\
        joinedload(Comment.replies).options(load_only('id','comment_id'))\
        ).one_or_none()

    repliesCount = db.session.query(func.count(Reply.id)).filter(comment.id == Reply.comment_id).scalar()
    if not repliesCount:
        repliesCount = 0

    return {
        "id": comment.id,
        "user_id": comment.user_id,
        "comment":comment.comment,
        "created_at": comment.created_at,
        "updated_at": comment.updated_at,
        "numOfReplies": repliesCount,
        "Owner": {
            "id": comment.user.id,
            "username": comment.user.username,
            "preview_image": comment.user.preview_image
        }
    }


# Edit a Comment
@comment_routes.route('/comments/<int:comment_id>', methods=['PUT'])
@login_required
def edit_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if not comment:
        return { "errors": ["Comment not found"] }, 404
    user_id = current_user.get_id()
    if str(user_id) != str(comment.user_id):
        return { "errors": ["Authorization required"] }, 403
    comment.comment = request.json
    db.session.commit()
    editedComment = comment.to_dict()

    comment = Comment.query.filter(editedComment['id'] == Comment.id).options(\
        joinedload(Comment.user).options(load_only('id','username', 'preview_image')),\
        joinedload(Comment.replies).options(load_only('id','comment_id'))\
        ).one_or_none()

    repliesCount = db.session.query(func.count(Reply.id)).filter(comment.id == Reply.comment_id).scalar()
    if not repliesCount:
        repliesCount = 0

    return {
        "id": comment.id,
        "user_id": comment.user_id,
        "comment":comment.comment,
        "created_at": comment.created_at,
        "updated_at": comment.updated_at,
        "numOfReplies": repliesCount,
        "Owner": {
            "id": comment.user.id,
            "username": comment.user.username,
            "preview_image": comment.user.preview_image
        }
    }


# Delete a Comment
@comment_routes.route('/comments/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if not comment:
        return { "errors": ["Comment not found"] }, 404
    user_id = current_user.get_id()
    if str(user_id) != str(comment.user_id):
        return { "errors": ["Authorization required"] }, 403
    db.session.delete(comment)
    db.session.commit()
    return { "message": "Comment successfully deleted"}
