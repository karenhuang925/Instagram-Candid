from .db import db, environment, SCHEMA, add_prefix_for_prod



class Follower(db.Model):
    __tablename__ = 'followers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    follows_user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    following_status = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="followers", foreign_keys=[user_id, follows_user_id])

    # this_user = db.relationship("User", foreign_keys=[user_id], back_populates="current_user")
    # user_follower = db.relationship("User", foreign_keys=[follows_user_id], back_populates="currently_follows")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'follows_user_id': self.follows_user_id,
            'following_status': self.following_status,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
