from app.models import db, Follower, environment, SCHEMA


def seed_followers():
  objects = [
    Follower(user_id = 1, follows_user_id = 2, following_status = True),
    Follower(user_id = 1, follows_user_id = 3, following_status = True),
    Follower(user_id = 1, follows_user_id = 4, following_status = True),
    Follower(user_id = 1, follows_user_id = 5, following_status = True),
    Follower(user_id = 2, follows_user_id = 1, following_status = True),
    Follower(user_id = 2, follows_user_id = 3, following_status = True),
    Follower(user_id = 2, follows_user_id = 4, following_status = True),
    Follower(user_id = 2, follows_user_id = 5, following_status = True),
    Follower(user_id = 3, follows_user_id = 1, following_status = True),
    Follower(user_id = 3, follows_user_id = 2, following_status = True),
    Follower(user_id = 3, follows_user_id = 4, following_status = True),
    Follower(user_id = 3, follows_user_id = 5, following_status = True),
    Follower(user_id = 4, follows_user_id = 1, following_status = True),
    Follower(user_id = 4, follows_user_id = 2, following_status = True),
    Follower(user_id = 4, follows_user_id = 3, following_status = True),
    Follower(user_id = 4, follows_user_id = 5, following_status = True),
    Follower(user_id = 5, follows_user_id = 1, following_status = True),
    Follower(user_id = 5, follows_user_id = 2, following_status = True),
    Follower(user_id = 5, follows_user_id = 3, following_status = True),
    Follower(user_id = 5, follows_user_id = 4, following_status = True)
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_followers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.followers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM followers")

    db.session.commit()
