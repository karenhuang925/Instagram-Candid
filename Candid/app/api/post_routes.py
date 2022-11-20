# from flask import Blueprint, jsonify
# from sqlalchemy.orm import relationship, sessionmaker, joinedload, load_only
# from ..models.like import Post

# post_routes = Blueprint('posts', __name__)

# Get all Posts
# @post_routes.route('/posts')
# def all_posts():
#     post = Post.query.get(id).options(joinedload(Post.medias).options(load_only('id', 'type', 'mediaFile')), joinedload(Post.user).options(load_only('id','profileName', 'previewImage')))
#     return {'Posts': jsonify(post)}

# # Get all Posts of Users Followed by Current User
# # Get all Posts created by the Current User

# # Get details of a Post from an id
# @post_routes.route('/posts/<int:id>', methods=["GET"])
# def get_post_by_id(id):
#     post = Post.query.get(id).options(joinedload(Post.medias).options(load_only('id', 'type', 'mediaFile')), joinedload(Post.user).options(load_only('id','profileName', 'previewImage')))
#     return jsonify(post)

# Create a Post
# Edit a Post
# Delete a Post