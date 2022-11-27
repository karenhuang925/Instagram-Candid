from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db,  User, Like, Post


like_routes = Blueprint('like', __name__)
@like_routes.route('/posts/<int:postId>/likes', methods=['get'])
def get_like_by_post_id(postId):
    if not Post.query.filter(Post.id == postId).one_or_none():
        return {"errors": ["Post couldn't be found"]}, 404

    likes = Like.query.filter(Like.post_id == postId).filter(Like.like_status == True).all()
    return {'likes': [like.to_dict() for like in likes]}


@login_required
@like_routes.route('/posts/<int:postId>/likes', methods=['POST'])
def like_a_post(postId):
    if not Post.query.filter(Post.id == postId).one_or_none():
        return {"errors": ["Post couldn't be found"]}, 404

    user_id = current_user.get_id()

    #check whether the user has liked the post or not
    the_like_relation = Like.query.filter(Like.user_id == user_id).filter(Like.post_id == postId).one_or_none()
    if the_like_relation:
        if the_like_relation.like_status == True:
            return {"errors": ["Current user liked this post already"]}, 401
        else:
            the_like_relation.like_status = True
            db.session.commit()
            return the_like_relation.to_dict()

    like = Like(
        user_id = user_id,
        post_id = postId,
        like_status = True
    )
    db.session.add(like)
    db.session.commit()

    return like.to_dict()

@login_required
@like_routes.route('/likes/<int:likeId>', methods=['PUT'])
def unlike_a_post(likeId):
    user_id = current_user.get_id()

    the_like_relation = Like.query.filter(Like.id == likeId).one_or_none()
    if not the_like_relation:
        return {"errors": ["Like couldn't be found"]}, 404
    if not int(user_id) == int(the_like_relation.user_id):
        return {'errors': ['Unauthorized']}
    # db.session.delete(the_like_relation)
    the_like_relation.like_status = False
    db.session.commit()
    return the_like_relation.to_dict()
