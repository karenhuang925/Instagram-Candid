from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User

user_routes = Blueprint('users', __name__, url_prefix='/users')

# GET - POST signup user
@user_routes.route('/signup', methods=["GET", "POST"])
def signup():
    user_info = request.json
    new_user = User(**user_info)
    db.session.add(new_user)
    db.session.commit()
    login_user(user)
    return new_user.safe_info()

# GET - POST login user
@user_routes.route('/login', methods=["GET", "POST"])
def login():
    user_credentials = request.json
    user = User.query.filter(User.email == user_credentials['email']).first()
    login_user(user)
    return user.safe_info()

# GET logout user
@user_routes.route('/logout')
@login_required
def logout():
    logout_user()
    return {
        "message": "Logged out successfully."
    }

# GET current user
@user_routes.route('/session')
@login_required
def session():
    user = current_user
    return user.to_dict()

# GET user by id
@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.safe_info()