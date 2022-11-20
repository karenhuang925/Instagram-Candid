from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Like(db.Model):
    __tablename__ = 'likes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    likeable_id = db.Column(db.Integer, nullable=False)
    likeable_type = db.Column(db.String(50), nullable=False)
    like_status = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="likes")

    __mapper_args__ = {
        "polymorphic_identity": "likes",
        "polymorphic_on": likeable_type,
    }

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
        "polymorphic_identity": "posts",
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

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

class Reply(Like):
    __tablename__ = 'replies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, db.ForeignKey('likes.likeable_id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'), nullable=False)
    reply = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="replies")
    # comment = db.relationship("Comment",
    #                         # back_populates="replies",
    #                         foreign_keys='comments.id')

    __mapper_args__ = {
        "polymorphic_identity": "replies",
    }

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'comment_id': self.comment_id,
            'reply': self.reply,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
