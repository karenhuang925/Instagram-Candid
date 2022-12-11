from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db,  User, Follower

follower_routes = Blueprint('follower', __name__)

@follower_routes.route('/users/<int:userId>/followers')
def follower_detail(userId):
    followers = Follower.query.filter(Follower.follows_user_id == userId).filter(Follower.following_status == True).options(joinedload(User.current_user).options(load_only('id','first_name', 'last_name', 'username', 'preview_image'))).all()
    return {
        'followers': [
            {
                'id': follower.id,
                'user_id': follower.user_id,
                'follows_user_id': follower.follows_user_id,
                'following_status': follower.following_status,
                'created_at': follower.created_at,
                'updated_at': follower.updated_at,
                'Owner': {
                    'id': follower.current_user.id,
                    'first_name': follower.current_user.first_name,
                    'last_name': follower.current_user.last_name,
                    'username': follower.current_user.username,
                    'preview_image': follower.current_user.preview_image
                }
            } for follower in followers
        ]
    }
    # return {'followers': [follower.to_dict() for follower in followers]}

@follower_routes.route('/users/<int:userId>/following')
def following_detail(userId):
    following = Follower.query.filter(Follower.user_id == userId).filter(Follower.following_status == True).options(joinedload(User.current_user).options(load_only('id','first_name', 'last_name', 'username', 'preview_image'))).all()
    
    return {
        'following': [
            {
                'id': follows.id,
                'user_id': follows.user_id,
                'follows_user_id': follows.follows_user_id,
                'following_status': follows.following_status,
                'created_at': follows.created_at,
                'updated_at': follows.updated_at,
                'Owner': {
                    'id': follows.current_user.id,
                    'first_name': follows.current_user.first_name,
                    'last_name': follows.current_user.last_name,
                    'username': follows.current_user.username,
                    'preview_image': follows.current_user.preview_image
                }
            } for follows in following
        ]
    }

    # return {'following': [follower.to_dict() for follower in following]}

@follower_routes.route('/users/<int:userId>/following/suggestions')
def follower_suggestion(userId):
    following2 = Follower.query\
    .filter(Follower.user_id == userId)\
    .filter(Follower.following_status == True).all()
    list = [follower.follows_user_id for follower in following2]
    list.append(userId)

    suggestions = User.query.filter(User.id.notin_(list)).all()
    return {'Followers Suggestion': [follower.to_dict() for follower in suggestions]}


@login_required
@follower_routes.route('/users/<int:userId>/followers', methods=['POST'])
def follow_a_user(userId):
    print(request.get_json())
    follows_user_id = request.json['follows_user_id']
    print(userId, "HELLO", follows_user_id)
    if str(userId) == str(follows_user_id):
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
    user_id = current_user.get_id()
    if not str(user_id) == str(userId):
        return {'errors': ['Unauthorized']}
    follows_user_id = request.json["follows_user_id"]

    the_follow_relation = Follower.query.filter(Follower.user_id == userId).filter(Follower.follows_user_id == follows_user_id).first()
    # db.session.delete(the_follow_relation)
    the_follow_relation.following_status = False
    db.session.commit()
    return the_follow_relation.to_dict()
