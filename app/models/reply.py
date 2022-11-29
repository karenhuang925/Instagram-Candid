from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func

class Reply(db.Model):
    __tablename__ = 'replies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('comments.id')), nullable=False)
    reply = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="replies")
    comment = db.relationship("Comment", back_populates="replies")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'comment_id': self.comment_id,
            'reply': self.reply,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
