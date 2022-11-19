from app.models import db, Post, environment, SCHEMA


def seed_posts():
  objects = [
    Post(user_id = 1, caption = 'caption 1', location = 'Australia'),
    Post(user_id = 1, caption = 'caption 2', location = 'Japan'),
    Post(user_id = 1, caption = 'caption 3', location = 'Canada'),
    Post(user_id = 1, caption = 'caption 4', location = 'Denmark'),
    Post(user_id = 1, caption = 'caption 5', location = 'Germany'),
    Post(user_id = 1, caption = 'caption 6', location = 'India'),
    Post(user_id = 1, caption = 'caption 7', location = 'Hungary'),
    Post(user_id = 1, caption = 'caption 8', location = 'China'),
    Post(user_id = 1, caption = 'caption 9', location = 'Finland'),
    Post(user_id = 1, caption = 'caption 10', location = 'United Kingdom'),
    Post(user_id = 1, caption = 'caption 11', location = 'Yemen'),
    Post(user_id = 1, caption = 'caption 12', location = 'Oman'),
    Post(user_id = 1, caption = 'caption 14', location = 'Zimbabwe'),
    Post(user_id = 1, caption = 'caption 15', location = 'France'),
    Post(user_id = 1, caption = 'caption 16', location = 'Peru'),
    Post(user_id = 1, caption = 'caption 17', location = 'Qatar'),
    Post(user_id = 1, caption = 'caption 18', location = 'Vanuatu'),
    Post(user_id = 1, caption = 'caption 19', location = 'Rwanda'),
    Post(user_id = 1, caption = 'caption 20', location = 'Netherlands'),
    Post(user_id = 2, caption = 'caption 1', location = 'Australia'),
    Post(user_id = 2, caption = 'caption 2', location = 'Japan'),
    Post(user_id = 2, caption = 'caption 3', location = 'Canada'),
    Post(user_id = 2, caption = 'caption 4', location = 'Denmark'),
    Post(user_id = 2, caption = 'caption 5', location = 'Germany'),
    Post(user_id = 2, caption = 'caption 6', location = 'India'),
    Post(user_id = 2, caption = 'caption 7', location = 'Hungary'),
    Post(user_id = 2, caption = 'caption 8', location = 'China'),
    Post(user_id = 2, caption = 'caption 9', location = 'Finland'),
    Post(user_id = 2, caption = 'caption 10', location = 'United Kingdom'),
    Post(user_id = 2, caption = 'caption 11', location = 'Yemen'),
    Post(user_id = 2, caption = 'caption 12', location = 'Oman'),
    Post(user_id = 2, caption = 'caption 14', location = 'Zimbabwe'),
    Post(user_id = 2, caption = 'caption 15', location = 'France'),
    Post(user_id = 2, caption = 'caption 16', location = 'Peru'),
    Post(user_id = 2, caption = 'caption 17', location = 'Qatar'),
    Post(user_id = 2, caption = 'caption 18', location = 'Vanuatu'),
    Post(user_id = 2, caption = 'caption 19', location = 'Rwanda'),
    Post(user_id = 2, caption = 'caption 20', location = 'Netherlands'),
    Post(user_id = 3, caption = 'caption 1', location = 'Australia'),
    Post(user_id = 3, caption = 'caption 2', location = 'Japan'),
    Post(user_id = 3, caption = 'caption 3', location = 'Canada'),
    Post(user_id = 3, caption = 'caption 4', location = 'Denmark'),
    Post(user_id = 3, caption = 'caption 5', location = 'Germany'),
    Post(user_id = 3, caption = 'caption 6', location = 'India'),
    Post(user_id = 3, caption = 'caption 7', location = 'Hungary'),
    Post(user_id = 3, caption = 'caption 8', location = 'China'),
    Post(user_id = 3, caption = 'caption 9', location = 'Finland'),
    Post(user_id = 3, caption = 'caption 10', location = 'United Kingdom'),
    Post(user_id = 3, caption = 'caption 11', location = 'Yemen'),
    Post(user_id = 3, caption = 'caption 12', location = 'Oman'),
    Post(user_id = 3, caption = 'caption 14', location = 'Zimbabwe'),
    Post(user_id = 3, caption = 'caption 15', location = 'France'),
    Post(user_id = 3, caption = 'caption 16', location = 'Peru'),
    Post(user_id = 3, caption = 'caption 17', location = 'Qatar'),
    Post(user_id = 3, caption = 'caption 18', location = 'Vanuatu'),
    Post(user_id = 3, caption = 'caption 19', location = 'Rwanda'),
    Post(user_id = 3, caption = 'caption 20', location = 'Netherlands'),
    Post(user_id = 4, caption = 'caption 1', location = 'Australia'),
    Post(user_id = 4, caption = 'caption 2', location = 'Japan'),
    Post(user_id = 4, caption = 'caption 3', location = 'Canada'),
    Post(user_id = 4, caption = 'caption 4', location = 'Denmark'),
    Post(user_id = 4, caption = 'caption 5', location = 'Germany'),
    Post(user_id = 4, caption = 'caption 6', location = 'India'),
    Post(user_id = 4, caption = 'caption 7', location = 'Hungary'),
    Post(user_id = 4, caption = 'caption 8', location = 'China'),
    Post(user_id = 4, caption = 'caption 9', location = 'Finland'),
    Post(user_id = 4, caption = 'caption 10', location = 'United Kingdom'),
    Post(user_id = 4, caption = 'caption 11', location = 'Yemen'),
    Post(user_id = 4, caption = 'caption 12', location = 'Oman'),
    Post(user_id = 4, caption = 'caption 14', location = 'Zimbabwe'),
    Post(user_id = 4, caption = 'caption 15', location = 'France'),
    Post(user_id = 4, caption = 'caption 16', location = 'Peru'),
    Post(user_id = 4, caption = 'caption 17', location = 'Qatar'),
    Post(user_id = 4, caption = 'caption 18', location = 'Vanuatu'),
    Post(user_id = 4, caption = 'caption 19', location = 'Rwanda'),
    Post(user_id = 4, caption = 'caption 20', location = 'Netherlands'),
    Post(user_id = 5, caption = 'caption 1', location = 'Australia'),
    Post(user_id = 5, caption = 'caption 2', location = 'Japan'),
    Post(user_id = 5, caption = 'caption 3', location = 'Canada'),
    Post(user_id = 5, caption = 'caption 4', location = 'Denmark'),
    Post(user_id = 5, caption = 'caption 5', location = 'Germany'),
    Post(user_id = 5, caption = 'caption 6', location = 'India'),
    Post(user_id = 5, caption = 'caption 7', location = 'Hungary'),
    Post(user_id = 5, caption = 'caption 8', location = 'China'),
    Post(user_id = 5, caption = 'caption 9', location = 'Finland'),
    Post(user_id = 5, caption = 'caption 10', location = 'United Kingdom'),
    Post(user_id = 5, caption = 'caption 11', location = 'Yemen'),
    Post(user_id = 5, caption = 'caption 12', location = 'Oman'),
    Post(user_id = 5, caption = 'caption 14', location = 'Zimbabwe'),
    Post(user_id = 5, caption = 'caption 15', location = 'France'),
    Post(user_id = 5, caption = 'caption 16', location = 'Peru'),
    Post(user_id = 5, caption = 'caption 17', location = 'Qatar'),
    Post(user_id = 5, caption = 'caption 18', location = 'Vanuatu'),
    Post(user_id = 5, caption = 'caption 19', location = 'Rwanda'),
    Post(user_id = 5, caption = 'caption 20', location = 'Netherlands')
  ]
  db.session.add_all(objects)
  db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM posts")

    db.session.commit()
