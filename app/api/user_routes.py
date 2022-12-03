from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User

user_routes = Blueprint('users', __name__)

# GET - POST signup user
@user_routes.route('/signup', methods=["POST"])
def signup():
    user_info = request.json
    user_by_email = User.query.filter((User.email == user_info["email"])).first()
    if user_by_email:
        return { "errors": ["User with this email already exists"] }, 403
    user_by_username = User.query.filter((User.username == user_info["username"])).first()
    if user_by_username:
        return { "errors": ["User with this username already exists"] }, 403
    new_user = User(**user_info)
    db.session.add(new_user)
    db.session.commit()
    login_user(new_user)
    return new_user.safe_info()

# GET - POST login user
@user_routes.route('/login', methods=["POST"])
def login():
    user_info = request.json
    print(user_info)
    print("raaaaw")
    credential = user_info["credential"]
    password = user_info["password"]
    user = User.query.filter((User.email == credential) | (User.username == credential)).first()
    if not user:
        return { "errors": ["Invalid credential"] }, 401
    if not user.check_password(password):
        return { "errors": ["Invalid password"] }, 401
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
def session():
    user = current_user
    return user.to_dict()

# GET user by id
@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.safe_info()
