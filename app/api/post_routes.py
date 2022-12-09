from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from sqlalchemy import func
from sqlalchemy.sql.expression import func
from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
from app.models import db, Follower, Post, User, Like, Comment
import random

post_routes = Blueprint('posts', __name__)

#Still Need to:
    # Need to return Posts ordered by date
    # Test Create, Edit, Delete routes and adjust code - Complete
    # Include Authenticate/Authorization capability -Complete
        # Need to make sure user is logged in in order to be complete requests
        # Need to make sure query exists
        # Need to make sure user owns post and authorized to make changes
    # Provide Validation and Error handling - Will Complete on Front End

# Get all Posts of Users Followed by Current User
@post_routes.route('/users/current/following/posts', methods=["GET"])
@login_required
def get_posts_of_users_current_user_follows():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    following = Follower.query.filter(user_id == Follower.user_id).filter(Follower.following_status == True).all()
    if not following:
        return {
            "message": "Users followed couldn't be found",
            "statusCode": 404
            }, 404

    currently_following = [user.to_dict() for user in following]
    all_id_of_following = [user['follows_user_id'] for user in currently_following]
    all_id_of_following.append(user_id)

    following_posts = []
    for following_user_id in all_id_of_following:
        posts = Post.query.filter(following_user_id == Post.user_id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).order_by(Post.created_at.desc()).all()
        # .order_by(Post.created_at.desc())
        # .order_by(func.random())
        for post in posts:

            allLikes = Like.query.filter(post.id == Like.post_id).all()
            userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
            postLikesCount = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).filter(Like.like_status == True).scalar()
            postCommentsCount = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()


            if not postLikesCount:
                postLikesCount = 0

            if not postCommentsCount:
                postCommentsCount = 0

            if not userLike:
                postLikeStatus = False
            else:
                aLike = userLike.to_dict()
                postLikeStatus = aLike['like_status']

            returnPost = {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "likes": postLikesCount,
                "comments": postCommentsCount,
                "likeStatus": postLikeStatus,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Likes" : [like.to_dict() for like in allLikes],
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
            }

            following_posts.append(returnPost)
    # random.shuffle(following_posts)
    following_posts.sort(key = lambda obj: obj['created_at'])

    return {"Posts" : [post for post in following_posts]}


    # return {
    #     "Posts" : [
    #         {
    #             "id": thisPost.id,
    #             "userId": thisPost.user_id,
    #             "caption": thisPost.caption,
    #             "location": thisPost.location,
    #             "likes": thisPost.likes,
    #             "created_at": thisPost.created_at,
    #             "updated_at": thisPost.updated_at,
    #             "Media" :[
    #                 {
    #                     "id": thisPost.id,
    #                     "user_id": thisPost.user_id,
    #                     "media_file": thisPost.media_file,
    #                     "type": thisPost.type
    #                 } for media in thisPost.medias
    #             ],
    #             "Owner": {
    #                 "id": thisPost.user.id,
    #                 "username": thisPost.user.username,
    #                 "previewImage": thisPost.user.preview_image
    #             }
    #         } for thisPost in following_posts
    #     ]
    # }

# Get all Posts by User id
@post_routes.route('/users/<int:id>/posts', methods=["GET"])
def get_posts_by_user_id(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    user = User.query.filter(id == User.id).one_or_none()
    if not user:
        return {
            "message": "User couldn't be found",
            "statusCode": 404
            }, 404

    posts = Post.query.filter(id == Post.user_id).options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).order_by(Post.created_at.desc()).all()
    if not posts:
        return {
            "message": "Posts couldn't be found",
            "statusCode": 404
            }, 404

    user_posts = []
    for post in posts:

            allLikes = Like.query.filter(post.id == Like.post_id).all()
            userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
            postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).scalar()
            postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

            if not postLikes:
                postLikes = 0
            if not postComments:
                postComments = 0
            if not userLike:
                postLikeStatus = False
            else:
                aLike = userLike.to_dict()
                postLikeStatus = aLike['like_status']

            returnPost = {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "likes": postLikes,
                "comments": postComments,
                "likeStatus": postLikeStatus,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Likes" : [like.to_dict() for like in allLikes],
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
            }

            user_posts.append(returnPost)
    return {"Posts" : [post for post in user_posts]}

# Get all Posts created by the Current User
@post_routes.route('/users/current/posts', methods=["GET"])
@login_required
def get_posts_by_current_user():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    posts = Post.query.filter(user_id == Post.user_id).options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).order_by(Post.created_at.desc()).all()
    if not posts:
        return {
            "message": "Posts couldn't be found",
            "statusCode": 404
            }, 404

    user_posts = []
    for post in posts:

            allLikes = Like.query.filter(post.id == Like.post_id).all()
            userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
            postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).scalar()
            postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

            if not postLikes:
                postLikes = 0
            if not postComments:
                postComments = 0
            if not userLike:
                postLikeStatus = False
            else:
                aLike = userLike.to_dict()
                postLikeStatus = aLike['like_status']

            returnPost = {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "likes": postLikes,
                "comments": postComments,
                "likeStatus": postLikeStatus,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Likes" : [like.to_dict() for like in allLikes],
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
            }

            user_posts.append(returnPost)
    return {"Posts" : [post for post in user_posts]}


# Get all Posts
@post_routes.route('/posts', methods=["GET"])
def get_all_posts():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    posts = Post.query.options(joinedload(Post.medias).options(load_only('id', 'user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).order_by(Post.created_at.desc()).order_by(func.random()).all()
    if not posts:
        return {
            "message": "Posts couldn't be found",
            "statusCode": 404
            }, 404

    all_posts = []
    for post in posts:

            allLikes = Like.query.filter(post.id == Like.post_id).all()
            userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
            postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).scalar()
            postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

            if not postLikes:
                postLikes = 0
            if not postComments:
                postComments = 0
            if not userLike:
                postLikeStatus = False
            else:
                aLike = userLike.to_dict()
                postLikeStatus = aLike['like_status']

            returnPost = {
                "id": post.id,
                "userId": post.user_id,
                "caption": post.caption,
                "location": post.location,
                "likes": postLikes,
                "comments": postComments,
                "likeStatus": postLikeStatus,
                "created_at": post.created_at,
                "updated_at": post.updated_at,
                "Likes" : [like.to_dict() for like in allLikes],
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
            }

            all_posts.append(returnPost)
    return {"Posts" : [post for post in all_posts]}

 # Get details of a Post from an id
@post_routes.route('/posts/<int:id>', methods=["GET"])
def get_post_by_id(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    post = Post.query.filter(id == Post.id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).one_or_none()
    if not post:
        return {
            "message": "Post couldn't be found",
            "statusCode": 404
            }, 404

    allLikes = Like.query.filter(post.id == Like.post_id).all()
    userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
    postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).filter(Like.like_status == True).scalar()
    postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

    if not postLikes:
        postLikes = 0
    if not postComments:
        postComments = 0
    if not userLike:
        postLikeStatus = False
    else:
        aLike = userLike.to_dict()
        postLikeStatus = aLike['like_status']

    return {
        "id": post.id,
        "userId": post.user_id,
        "caption": post.caption,
        "location": post.location,
        "likes": postLikes,
        "comments": postComments,
        "likeStatus": postLikeStatus,
        "created_at": post.created_at,
        "updated_at": post.updated_at,
        "Likes" : [like.to_dict() for like in allLikes],
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
@login_required
def create_new_post():

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    caption = request.json['caption'] or ""
    location = request.json['location'] or ""

    newPost = Post(
        user_id = user_id,
        caption = caption,
        location = location
    )

    db.session.add(newPost)
    db.session.commit()

    addedPost = newPost.to_dict()

    post = Post.query.filter(addedPost['id'] == Post.id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).one_or_none()

    allLikes = Like.query.filter(post.id == Like.post_id).all()
    userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
    postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).filter(Like.like_status == True).scalar()
    postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

    if not postLikes:
        postLikes = 0

    if not postComments:
        postComments = 0

    if not userLike:
        postLikeStatus = False
    else:
        aLike = userLike.to_dict()
        postLikeStatus = aLike['like_status']

    return {
        "id": post.id,
        "userId": post.user_id,
        "caption": post.caption,
        "location": post.location,
        "likes": postLikes,
        "comments": postComments,
        "likeStatus": postLikeStatus,
        "created_at": post.created_at,
        "updated_at": post.updated_at,
        "Likes" : [like.to_dict() for like in allLikes],
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


# Edit a Post
@post_routes.route('/posts/<int:id>', methods=["PUT"])
@login_required
def edit_post(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    caption = request.json['caption']
    location = request.json['location']

    PostEdit = Post.query.filter(id == Post.id).one_or_none()
    if not PostEdit:
        return {
            "message": "Post couldn't be found",
            "statusCode": 404
            }, 404

    if not (PostEdit.user_id == user_id):
        return {
            "message": "Forbidden",
            "statusCode": 403
            }, 403

    PostEdit.caption = caption
    PostEdit.location = location

    db.session.commit()

    post = Post.query.filter(id == Post.id).options(joinedload(Post.medias).options(load_only('id','user_id', 'type', 'media_file')), joinedload(Post.user).options(load_only('id','username', 'preview_image'))).one_or_none()

    allLikes = Like.query.filter(post.id == Like.post_id).all()
    userLike = Like.query.filter(post.id == Like.post_id).filter(user_id == Like.user_id).one_or_none()
    postLikes = db.session.query(func.count(Like.id)).filter(post.id == Like.post_id).filter(Like.like_status == True).scalar()
    postComments = db.session.query(func.count(Comment.id)).filter(post.id == Comment.post_id).scalar()

    if not postLikes:
        postLikes = 0

    if not postComments:
        postComments = 0

    if not userLike:
        postLikeStatus = False
    else:
        aLike = userLike.to_dict()
        postLikeStatus = aLike['like_status']

    return {
        "id": post.id,
        "userId": post.user_id,
        "caption": post.caption,
        "location": post.location,
        "likes": postLikes,
        "comments": postComments,
        "likeStatus": postLikeStatus,
        "created_at": post.created_at,
        "updated_at": post.updated_at,
        "Likes" : [like.to_dict() for like in allLikes],
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


# Delete a Post
@post_routes.route('/posts/<int:id>', methods=["DELETE"])
@login_required
def delete_post(id):

    currentuser = current_user.to_dict()
    user_id = currentuser['id']

    post = Post.query.filter(id == Post.id).one_or_none()
    if not post:
        return {
            "message": "Post couldn't be found",
            "statusCode": 404
            }, 404

    if not (post.user_id == user_id):
        return {
            "message": "Forbidden",
            "statusCode": 403
            }, 403

    db.session.delete(post)
    db.session.commit()

    return {
        "message": "Successfully deleted",
        "statusCode": 200
    }
