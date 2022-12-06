from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Media, Post, User

media_routes = Blueprint('media', __name__)

@login_required
@media_routes.route('/posts/<int:postId>/media', methods=["POST"])
def add_media(postId):
    print(request.json)
    media_file = request.json["media_file"]
    media_type = request.json["type"]
    currentId = current_user.get_id()

    post = Post.query.filter(Post.id == postId).one_or_none()
    if not post:
        return {"errors": ["Post couldn't be found"]}, 404
    # elif currentId != post.user_id:
    #     return {"errors": ["Authorization required"]}, 403
    else:
        media = Media(
        user_id = currentId,
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
    currentId = current_user.get_id()

    media = Media.query.filter(Media.id == mediaId).one_or_none()
    if not media:
        return {"errors": ["Media couldn't be found"]}, 404
    elif media.user_id != currentId:
        return {"errors": ["Authorization required"]}, 403
    else:
        db.session.delete(media)
        db.session.commit()
        return {"message": "Successfully deleted"}, 200
