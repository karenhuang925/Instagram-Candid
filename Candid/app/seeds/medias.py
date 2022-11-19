from app.models import db, Media, environment, SCHEMA


def seed_medias():
  objects = [
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_medias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.medias RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM medias")

    db.session.commit()
