from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Follower, Post

post_routes = Blueprint('posts', __name__)

#Still Need to:
    # Test Create, Edit, Delete routes and adjust code
    # Include Authenticate and Authorization capability
    # Provide Validation and Error handling

# Get all Posts by user id
@post_routes.route('/users/<int:id>/posts', methods=["GET"])
def get_posts_by_user_id(id):
    
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
@post_routes.route('/users/current/following/posts', methods=["GET"])
@login_required
def get_posts_of_users_current_user_follows():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    following = Follower.query.filter(Follower.user_id == user_id).filter(Follower.following_status == True).all()

    currently_following = [user.to_dict() for user in following]

    all_id_of_following = [user['follows_user_id'] for user in currently_following]

    following_posts = []
    for user_id in all_id_of_following:
        posts = Post.query.filter(user_id == Post.user_id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).all()
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


# Get all Posts created by the Current User
@post_routes.route('/users/current/posts', methods=["GET"])
@login_required
def get_posts_by_current_user():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']
    
    posts = Post.query.filter(user_id == Post.user_id).options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file'))).all()
    
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


# Get all Posts
@post_routes.route('/posts', methods=["GET"])
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


# Create a Post
@post_routes.route('/posts', methods=["POST"])
@login_required
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
@login_required
def edit_post(id):
    
    caption = request.json['caption']
    location = request.json['location']

    post = Post.query.filter(Post.id == id).first()

    post.caption = caption
    post.location = location

    db.session.commit()

    return post.to_dict()


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