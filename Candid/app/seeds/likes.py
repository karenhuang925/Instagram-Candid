from app.models import db, Like, environment, SCHEMA


def seed_likes():
  objects = [
    Like(user_id = 1, likeable_id = 20, likeable_type = "post", like_status = True),
    Like(user_id = 1, likeable_id = 39, likeable_type = "post", like_status = True),
    Like(user_id = 1, likeable_id = 58, likeable_type = "post", like_status = True),
    Like(user_id = 1, likeable_id = 77, likeable_type = "post", like_status = True),
    Like(user_id = 2, likeable_id = 1, likeable_type = "post", like_status = True),
    Like(user_id = 2, likeable_id = 39, likeable_type = "post", like_status = True),
    Like(user_id = 2, likeable_id = 58, likeable_type = "post", like_status = True),
    Like(user_id = 2, likeable_id = 77, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 1, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 20, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 58, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 77, likeable_type = "post", like_status = True),
    Like(user_id = 4, likeable_id = 1, likeable_type = "post", like_status = True),
    Like(user_id = 4, likeable_id = 20, likeable_type = "post", like_status = True),
    Like(user_id = 4, likeable_id = 39, likeable_type = "post", like_status = True),
    Like(user_id = 4, likeable_id = 77, likeable_type = "post", like_status = True),
    Like(user_id = 5, likeable_id = 1, likeable_type = "post", like_status = True),
    Like(user_id = 5, likeable_id = 20, likeable_type = "post", like_status = True),
    Like(user_id = 5, likeable_id = 39, likeable_type = "post", like_status = True),
    Like(user_id = 5, likeable_id = 58, likeable_type = "post", like_status = True),
    Like(user_id = 1, likeable_id = 20, likeable_type = "comment", like_status = True),
    Like(user_id = 1, likeable_id = 39, likeable_type = "comment", like_status = True),
    Like(user_id = 1, likeable_id = 58, likeable_type = "comment", like_status = True),
    Like(user_id = 1, likeable_id = 76, likeable_type = "comment", like_status = True),
    Like(user_id = 2, likeable_id = 77, likeable_type = "comment", like_status = True),
    Like(user_id = 2, likeable_id = 96, likeable_type = "comment", like_status = True),
    Like(user_id = 2, likeable_id = 115, likeable_type = "comment", like_status = True),
    Like(user_id = 2, likeable_id = 133, likeable_type = "comment", like_status = True),
    Like(user_id = 3, likeable_id = 152, likeable_type = "comment", like_status = True),
    Like(user_id = 3, likeable_id = 171, likeable_type = "comment", like_status = True),
    Like(user_id = 3, likeable_id = 190, likeable_type = "comment", like_status = True),
    Like(user_id = 3, likeable_id = 208, likeable_type = "comment", like_status = True),
    Like(user_id = 4, likeable_id = 230, likeable_type = "comment", like_status = True),
    Like(user_id = 4, likeable_id = 249, likeable_type = "comment", like_status = True),
    Like(user_id = 4, likeable_id = 268, likeable_type = "comment", like_status = True),
    Like(user_id = 4, likeable_id = 286, likeable_type = "comment", like_status = True),
    Like(user_id = 5, likeable_id = 310, likeable_type = "comment", like_status = True),
    Like(user_id = 5, likeable_id = 329, likeable_type = "comment", like_status = True),
    Like(user_id = 5, likeable_id = 338, likeable_type = "comment", like_status = True),
    Like(user_id = 5, likeable_id = 356, likeable_type = "comment", like_status = True),
    Like(user_id = 3, likeable_id = 20, likeable_type = "reply", like_status = True),
    Like(user_id = 3, likeable_id = 39, likeable_type = "reply", like_status = True),
    Like(user_id = 3, likeable_id = 58, likeable_type = "reply", like_status = True),
    Like(user_id = 3, likeable_id = 76, likeable_type = "reply", like_status = True),
    Like(user_id = 4, likeable_id = 77, likeable_type = "reply", like_status = True),
    Like(user_id = 4, likeable_id = 96, likeable_type = "reply", like_status = True),
    Like(user_id = 4, likeable_id = 115, likeable_type = "reply", like_status = True),
    Like(user_id = 4, likeable_id = 133, likeable_type = "reply", like_status = True),
    Like(user_id = 5, likeable_id = 152, likeable_type = "reply", like_status = True),
    Like(user_id = 5, likeable_id = 171, likeable_type = "reply", like_status = True),
    Like(user_id = 5, likeable_id = 190, likeable_type = "reply", like_status = True),
    Like(user_id = 5, likeable_id = 208, likeable_type = "reply", like_status = True),
    Like(user_id = 1, likeable_id = 230, likeable_type = "reply", like_status = True),
    Like(user_id = 1, likeable_id = 249, likeable_type = "reply", like_status = True),
    Like(user_id = 1, likeable_id = 268, likeable_type = "reply", like_status = True),
    Like(user_id = 1, likeable_id = 286, likeable_type = "reply", like_status = True),
    Like(user_id = 2, likeable_id = 310, likeable_type = "reply", like_status = True),
    Like(user_id = 2, likeable_id = 329, likeable_type = "reply", like_status = True),
    Like(user_id = 2, likeable_id = 338, likeable_type = "reply", like_status = True),
    Like(user_id = 2, likeable_id = 356, likeable_type = "reply", like_status = True)
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
