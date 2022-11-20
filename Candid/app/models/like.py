from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Like(db.Model):
    __tablename__ = 'likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    like_status = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="likes", )
    post = db.relationship("Post", back_populates="likes")

<<<<<<< HEAD
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'likeable_type': self.likeable_type,
            'like_status': self.like_status,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

class Post(Like):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.likeable_id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(256))
    location = db.Column(db.String(100))
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="posts")
    medias = db.relationship('Media', back_populates='post')

    __mapper_args__ = {
        "polymorphic_identity": "post",
    }

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'caption': self.caption,
            'location': self.location,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

class Comment(Like):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.likeable_id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    comment = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="comments")
    # replies = db.relationship('Reply', foreign_keys='Reply.comment_id')

    __mapper_args__ = {
        "polymorphic_identity": "comments",
    }
=======
>>>>>>> no-polymorphic

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'like_status': self.like_status,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
