from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class Like(db.Model):
    __tablename__ = 'likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    # likeable_id = db.Column(db.ForeignKey, nullable=False)
    likeable_type = db.Column(db.String(50), nullable=False)
    like_status = db.Column(db.Boolean, default=True)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="likes")
    __mapper_args__ = {
        "polymorphic_identity": "likes",
        "polymorphic_on": likeable_type,
    }

    # post = db.relationship('Post', back_populates="likes")
    # comment = db.relationship("Comment", back_populates="likes")
    # reply = db.relationship('Reply', back_populates='likes')
#fix relationships- should be polymorphic
#all children in this file, inherit likes
class Post(Like):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.id'), primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(256))
    location = db.Column(db.String(100))
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="posts")
    medias = db.relationship('Media', back_populates='post')

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    __mapper_args__ = {
        "polymorphic_identity": "posts",
    }

class Comment(Like):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.id'), primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.ForeignKey('posts.id'), nullable=False)
    comment = db.Column(db.String(256), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="comments")
    replies = db.relationship('Reply', back_populates='comment')

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    __mapper_args__ = {
        "polymorphic_identity": "comments",
    }

class Reply(Like):
    __tablename__ = 'replies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.id'), primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    comment_id = db.Column(db.ForeignKey('comments.id'), nullable=False)
    reply = db.Column(db.String(256), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="replies")
    comment = db.relationship("Comment", back_populates="replies")

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    __mapper_args__ = {
        "polymorphic_identity": "replies",
    }
