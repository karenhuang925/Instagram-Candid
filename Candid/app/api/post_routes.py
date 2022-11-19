from flask import Blueprint, jsonify
from ..models.like import Post

post_routes = Blueprint('posts', __name__)

# Get all Posts
@post_routes.route('/')
def all_posts():
    pass

# Get all Posts of Users Followed by Current User
# Get all Posts created by the Current User
# Get details of a Post from an id
@post_routes.route('/<int:id>', methods=["GET"])
def get_post_by_id(id):
    pass
# Create a Post
# Edit a Post
# Delete a Post