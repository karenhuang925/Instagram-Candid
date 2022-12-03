from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(50), nullable=False, unique=True)
    biography = db.Column(db.String(500))
    hashed_password = db.Column(db.String(256), nullable=False)
    preview_image=db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    posts = db.relationship('Post', back_populates='user')
    medias = db.relationship('Media', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')
    replies = db.relationship('Reply', back_populates='user')
    likes = db.relationship('Like', back_populates='user')

    current_user = db.relationship('Follower', back_populates='this_user', foreign_keys='Follower.user_id')



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'biography': self.biography,
            'hashed_password': self.hashed_password,
            'preview_image': self.preview_image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def safe_info(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'biography': self.biography,
            'preview_image': self.preview_image
        }
