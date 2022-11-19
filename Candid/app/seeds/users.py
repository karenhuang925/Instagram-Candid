from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
  objects = [
    User(first_name = "Whindersson", last_name = "Nunes", username = "whindersonnunes", biography = "biography 1", email = "whindersonnunes@gmail.com", password = "password1234", preview_image = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Whindersson_Nunes_em_2019.png"),
    User(first_name = "Huda", last_name = "Kattan", username = "hudabeauty", biography = "biography 2", email = "hudabeauty@gmail.com", password = "password1234", preview_image = "https://image.cnbcfm.com/api/v1/image/106371890-1580835090681huda-3.jpg?v=1580835149"),
    User(first_name = "Eleanora", last_name = "Pons", username = "lelepons", biography = "biography 3", email = "lelepons@gmail.com", password = "password1234", preview_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lele_Pons_2019_by_Glenn_Francis.jpg/1200px-Lele_Pons_2019_by_Glenn_Francis.jpg"),
    User(first_name = "Nusret", last_name = "Gokce", username = "nusr_et", biography = "biography 4", email = "nusr_et@gmail.com", password = "password1234", preview_image = "https://m.media-amazon.com/images/M/MV5BZWMyMTJlMjMtODgyYy00YmIzLWE4ZjQtMWMyZGY0NzZhNDQyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg"),
    User(first_name = "Dan", last_name = "Blizerian", username = "danblizerian", biography = "biography 5", email = "danblizerian@gmail.com", password = "password1234", preview_image = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dan_Bilzerian.jpg")
  ]
  db.session.add_all(objects)
  db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
