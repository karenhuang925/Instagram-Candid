from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


class Media(db.Model):
    __tablename__ = 'medias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    media_file = db.Column(db.String(256), nullable=False)
    type = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="medias")
    post = db.relationship("Post", back_populates="medias")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'media_file': self.media_file,
            'type': self.type,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
