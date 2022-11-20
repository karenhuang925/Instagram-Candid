from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db,  User, Follower

follower_routes = Blueprint('follower', __name__)

@follower_routes.route('/users/<int:userId>/followers')
def follower_detail(userId):
    followers = Follower.query.filter(Follower.follows_user_id == userId).filter(Follower.following_status == True)
    return {'followers': [follower.to_dict() for follower in followers]}

@follower_routes.route('/users/<int:userId>/following')
def following_detail(userId):
    following = Follower.query.filter(Follower.user_id == userId).filter(Follower.following_status == True)

    return {'following': [follower.to_dict() for follower in following]}


@login_required
@follower_routes.route('/users/<int:userId>/followers', methods=['POST'])
def follow_a_user(userId):
    follows_user_id = request.json["follows_user_id"]

    if userId == follows_user_id:
        return {"errors": ["User cannot follow themselves"]}, 401

    user = User.query.filter(User.id == follows_user_id).one_or_none()
    if not user:
        return {"errors": ["User couldn't be found"]}, 404

    the_follow_relation = Follower.query.filter(Follower.user_id == userId).filter(Follower.follows_user_id == follows_user_id).one_or_none()
    if the_follow_relation:
        if the_follow_relation.following_status == True:
            return {"errors": ["Current user is already a follower of the user"]}, 401

        the_follow_relation.following_status = True
        db.session.commit()
        return the_follow_relation.to_dict()

    follow = Follower(
        user_id = userId,
        follows_user_id = follows_user_id,
        following_status = True
    )

    db.session.add(follow)
    db.session.commit()
    return follow.to_dict()


@login_required
@follower_routes.route('/users/<int:userId>/followers', methods=['PUT'])
def unfollow_a_user(userId):
    # if not current_user.id == userId:
    #     return {'errors': ['Unauthorized']}
    follows_user_id = request.json["follows_user_id"]

    the_follow_relation = Follower.query.filter(Follower.user_id == userId).filter(Follower.follows_user_id == follows_user_id).first()
    db.session.delete(the_follow_relation)
    # the_follow_relation.following_status = False
    db.session.commit()
    return the_follow_relation.to_dict()
