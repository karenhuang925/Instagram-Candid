from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Media, User

media_routes = Blueprint('media', __name__)

@media_routes.route('/posts/<int:postId>/media')
def placeholder():
    pass
