from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    caption = db.Column(db.String(256))
    location = db.Column(db.String(100))
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="posts")
    medias = db.relationship('Media', back_populates='post', cascade="all, delete-orphan")
    likes = db.relationship("Like", back_populates="post", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates="posts", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'caption': self.caption,
            'location': self.location,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
