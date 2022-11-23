from flask import Blueprint, jsonify, request
from flask_login import current_user
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Follower, Post, User

post_routes = Blueprint('posts', __name__)

# Get all Posts
@post_routes.route('/posts')
def get_all_posts():

    posts = Post.query.options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file'))).all()
    return {
        "Posts" : [
            {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Media" :[
                    {
                        "id": media.id,
                        "user_id": media.user_id,
                        "media_file": media.media_file,
                        "type": media.type
                    } for media in post.medias
                ]
            } for post in posts
        ]
    }


# Get all Posts created by the Current User
@post_routes.route('/users/<int:id>/posts', methods=["GET"])
def get_posts_by_current_user(id):

    # Need to adjust for user login, authenticat and pull current user in session

    # user = current_user
    # currentuser = user.to_dict()
    # currentuser = current_user.to_dict()
    # user_id = currentuser['id']
    # print("HERE1", currentuser)

    # current_user = User.query.filter(id == User.id).first()
    posts = Post.query.filter(id == Post.user_id).options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file'))).all()
    return {
        "Posts" : [
            {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Media" :[
                    {
                        "id": media.id,
                        "user_id": media.user_id,
                        "media_file": media.media_file,
                        "type": media.type
                    } for media in post.medias
                ]
            } for post in posts
        ]
    }


# Get all Posts of Users Followed by Current User
@post_routes.route('/users/<int:id>/following/posts')
def get_posts_of_users_current_user_follows(id):

    following = Follower.query.filter(Follower.user_id == id).filter(Follower.following_status == True).all()

    currently_following = [user.to_dict() for user in following]

    all_id_of_following = [user['follows_user_id'] for user in currently_following]

    following_posts = []
    for id in all_id_of_following:
        posts = Post.query.filter(id == Post.user_id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).all()
        for post in posts:
            following_posts.append(post)

    return {
        "Posts" : [
            {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Media" :[
                    {
                        "id": media.id,
                        "user_id": media.user_id,
                        "media_file": media.media_file,
                        "type": media.type
                    } for media in post.medias
                ],
                "Owner": {
                    "id": post.user.id,
                    "username": post.user.username,
                    "previewImage": post.user.preview_image
                }
            } for post in following_posts
        ]
    }


# Get details of a Post from an id
@post_routes.route('/posts/<int:id>', methods=["GET"])
def get_post_by_id(id):

    post = Post.query.filter(id == Post.id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).first()
    return {
        "id": post.id,
        "userId": post.user_id,
        "caption": post.caption,
        "location": post.location,
        "created_at": post.created_at,
        "updated_at": post.updated_at,
        "Media" : [
            {
                "id": media.id,
                "user_id": media.user_id,
                "media_file": media.media_file,
                "type": media.type
            } for media in post.medias
                ],
        "Owner": {
            "id": post.user.id,
            "username": post.user.username,
            "previewImage": post.user.preview_image
        }
    }


# Create a Post
@post_routes.route('/posts', methods=["POST"])
def create_new_post():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']
    
    caption = request.json['caption']
    location = request.json['location']

    post = Post(
        user_id = user_id,
        caption = caption,
        location = location
    )

    db.session.add(post)
    db.session.commit()
    return post.to_dict()

# Edit a Post
@post_routes.route('/posts/<int:id>', methods=["PUT"])

# Delete a Post
@post_routes.route('/posts/<int:id>', methods=["DELETE"])
def delete_post(id):
    
    post = Post.query.filter(Post.id == id).first()

    db.session.delete(post)
    db.session.commit()
    return {
        "message": "Successfully deleted",
        "statusCode": 404
    }
