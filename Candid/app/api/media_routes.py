from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Media, User

media_routes = Blueprint('media', __name__)

@login_required
@media_routes.route('/posts/<int:postId>/media', methods=["POST"])
def add_media(postId):
    media_file = request.json["media_file"]
    media_type = request.json["type"]

    post = Post.query.filter(Post.id == postId).one_or_none()
    if not post:
        return {"errors": ["Post couldn't be found"]}, 404
    elif current_user.id != post.user_id:
        return {"errors": ["Authorization required"]}, 403
    else:
        media = Media(
        user_id = current_user.id,
        post_id = post.id,
        media_file = media_file,
        type = media_type
        )

        db.session.add(media)
        db.session.commit()
        return media.to_dict()

@login_required
@media_routes.route('/media/<int:mediaId>', methods=["DELETE"])
def delete_media(mediaId):

    media = Media.query.filter(Media.id == mediaId).one_or_none()
    if not media:
        return {"errors": ["Media couldn't be found"]}, 404
    elif media.user_id != current_user.id:
        return {"errors": ["Authorization required"]}, 403
    else:
        db.session.delete(media)
        db.session.commit()
        return {"message": "Successfully deleted"}, 200
