from app.models import db, Like, environment, SCHEMA


def seed_likes():
  objects = [
    Like(user_id = 1, post_id = 20, like_status = True),
    Like(user_id = 1, post_id = 39, like_status = True),
    Like(user_id = 1, post_id = 58, like_status = True),
    Like(user_id = 1, post_id = 77, like_status = True),
    Like(user_id = 2, post_id = 1, like_status = True),
    Like(user_id = 2, post_id = 39, like_status = True),
    Like(user_id = 2, post_id = 58, like_status = True),
    Like(user_id = 2, post_id = 77, like_status = True),
    Like(user_id = 3, post_id = 1, like_status = True),
    Like(user_id = 3, post_id = 20, like_status = True),
    Like(user_id = 3, post_id = 58, like_status = True),
    Like(user_id = 3, post_id = 77, like_status = True),
    Like(user_id = 4, post_id = 1, like_status = True),
    Like(user_id = 4, post_id = 20, like_status = True),
    Like(user_id = 4, post_id = 39, like_status = True),
    Like(user_id = 4, post_id = 77, like_status = True),
    Like(user_id = 5, post_id = 1, like_status = True),
    Like(user_id = 5, post_id = 20, like_status = True),
    Like(user_id = 5, post_id = 39, like_status = True),
    Like(user_id = 5, post_id = 58, like_status = True),
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
