from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class Follower(db.Model):
    __tablename__ = 'followers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    follows_user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    following_status = db.Column(db.Boolean, default=True)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    # user = db.relationship("User", back_populates="posts")
    # fix

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
