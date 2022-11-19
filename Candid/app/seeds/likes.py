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
    Like(user_id = 3, likeable_id = 20, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 39, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 58, likeable_type = "post", like_status = True),
    Like(user_id = 3, likeable_id = 77, likeable_type = "post", like_status = True),

  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
