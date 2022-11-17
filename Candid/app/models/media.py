from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class Media(db.Model):
    __tablename__ = 'medias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.ForeignKey('posts.id'), nullable=False)
    media_file = db.Column(db.String(256), nullable=False)
    type = db.Column(nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updatedAt = db.Column(db.DateTime(timezone=True), onupdate=func.now())

    user = db.relationship("User", back_populates="medias")
    post = db.relationship("Post", back_populates="medias")

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
