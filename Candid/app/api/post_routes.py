from flask import Blueprint, jsonify
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from ..models.post import Post
from ..models.user import User

post_routes = Blueprint('posts', __name__)

# Get all Posts
@post_routes.route('/posts')
def all_posts():

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
@post_routes.route('/users/<int:id>/follows/posts')
def get_posts_of_users_current_user_follows():
    # Need find all the people the current user follows
    # Need to find the posts of the 
    pass

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
# Edit a Post
# Delete a Post