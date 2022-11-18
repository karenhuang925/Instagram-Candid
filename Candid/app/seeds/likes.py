from app.models import db, Post, environment, SCHEMA


def seed_posts():
  objects = []
  Post(user_id = 1, caption = 'caption 1', location = 'Australia'),
  Post(user_id = 1, caption = 'caption 2', location = 'Japan'),
  Post(
    user_id = 1, caption = 'caption 3', location = 'Canada')
  four = Post(
    user_id = 1, caption = 'caption 4', location = 'Denmark')
  five = Post(
    user_id = 1, caption = 'caption 5', location = 'Germany')
  six = Post(
    user_id = 1, caption = 'caption 6', location = 'India')
  seven = Post(
    user_id = 1, caption = 'caption 7', location = 'Hungary')
  eight = Post(
    user_id = 1, caption = 'caption 8', location = 'China')
  nine = Post(
    user_id = 1, caption = 'caption 9', location = 'Finland')
  ten = Post(
    user_id = 1, caption = 'caption 10', location = 'United Kingdom')
  eleven = Post(
    user_id = 1, caption = 'caption 11', location = 'Yemen')
  twelve = Post(
    user_id = 1, caption = 'caption 12', location = 'Oman')
  fourteen = Post(
    user_id = 1, caption = 'caption 14', location = 'Zimbabwe')
  fifteen = Post(
    user_id = 1, caption = 'caption 15', location = 'France')
  sixteen = Post(
    user_id = 1, caption = 'caption 16', location = 'Peru')
  seventeen = Post(
    user_id = 1, caption = 'caption 17', location = 'Qatar')
  eighteen = Post(
    user_id = 1, caption = 'caption 18', location = 'Vanuatu')
  nineteen = Post(
    user_id = 1, caption = 'caption 19', location = 'Rwanda')
  twenty = Post(
    user_id = 1, caption = 'caption 20', location = 'Netherlands')
  onea = Post(
    user_id = 2, caption = 'caption 1', location = 'Australia')
  twoa = Post(
    user_id = 2, caption = 'caption 2', location = 'Japan')
  threea = Post(
    user_id = 2, caption = 'caption 3', location = 'Canada')
  foura = Post(
    user_id = 2, caption = 'caption 4', location = 'Denmark')
  fivea = Post(
    user_id = 2, caption = 'caption 5', location = 'Germany')
  sixa = Post(
    user_id = 2, caption = 'caption 6', location = 'India')
  sevena = Post(
    user_id = 2, caption = 'caption 7', location = 'Hungary')
  eighta = Post(
    user_id = 2, caption = 'caption 8', location = 'China')
  ninea = Post(
    user_id = 2, caption = 'caption 9', location = 'Finland')
  tena = Post(
    user_id = 2, caption = 'caption 10', location = 'United Kingdom')
  elevena = Post(
    user_id = 2, caption = 'caption 11', location = 'Yemen')
  twelvea = Post(
    user_id = 2, caption = 'caption 12', location = 'Oman')
  fourteena = Post(
    user_id = 2, caption = 'caption 14', location = 'Zimbabwe')
  fifteena = Post(
    user_id = 2, caption = 'caption 15', location = 'France')
  sixteena = Post(
    user_id = 2, caption = 'caption 16', location = 'Peru')
  seventeena = Post(
    user_id = 2, caption = 'caption 17', location = 'Qatar')
  eighteena = Post(
    user_id = 2, caption = 'caption 18', location = 'Vanuatu')
  nineteena = Post(
    user_id = 2, caption = 'caption 19', location = 'Rwanda')
  twentya = Post(
    user_id = 2, caption = 'caption 20', location = 'Netherlands')
  oneb = Post(
    user_id = 3, caption = 'caption 1', location = 'Australia')
  twob = Post(
    user_id = 3, caption = 'caption 2', location = 'Japan')
  threeb = Post(
    user_id = 3, caption = 'caption 3', location = 'Canada')
  fourb = Post(
    user_id = 3, caption = 'caption 4', location = 'Denmark')
  fiveb = Post(
    user_id = 3, caption = 'caption 5', location = 'Germany')
  sixb = Post(
    user_id = 3, caption = 'caption 6', location = 'India')
  sevenb = Post(
    user_id = 3, caption = 'caption 7', location = 'Hungary')
  eightb = Post(
    user_id = 3, caption = 'caption 8', location = 'China')
  nineb = Post(
    user_id = 3, caption = 'caption 9', location = 'Finland')
  tenb = Post(
    user_id = 3, caption = 'caption 10', location = 'United Kingdom')
  elevenb = Post(
    user_id = 3, caption = 'caption 11', location = 'Yemen')
  twelveb = Post(
    user_id = 3, caption = 'caption 12', location = 'Oman')
  fourteenb = Post(
    user_id = 3, caption = 'caption 14', location = 'Zimbabwe')
  fifteenb = Post(
    user_id = 3, caption = 'caption 15', location = 'France')
  sixteenb = Post(
    user_id = 3, caption = 'caption 16', location = 'Peru')
  seventeenb = Post(
    user_id = 3, caption = 'caption 17', location = 'Qatar')
  eighteenb = Post(
    user_id = 3, caption = 'caption 18', location = 'Vanuatu')
  nineteenb = Post(
    user_id = 3, caption = 'caption 19', location = 'Rwanda')
  twentyb = Post(
    user_id = 3, caption = 'caption 20', location = 'Netherlands')
  onec = Post(
    user_id = 4, caption = 'caption 1', location = 'Australia')
  twoc = Post(
    user_id = 4, caption = 'caption 2', location = 'Japan')
  threec = Post(
    user_id = 4, caption = 'caption 3', location = 'Canada')
  fourc = Post(
    user_id = 4, caption = 'caption 4', location = 'Denmark')
  fivec = Post(
    user_id = 4, caption = 'caption 5', location = 'Germany')
  sixc = Post(
    user_id = 4, caption = 'caption 6', location = 'India')
  sevenc = Post(
    user_id = 4, caption = 'caption 7', location = 'Hungary')
  eightc = Post(
    user_id = 4, caption = 'caption 8', location = 'China')
  ninec = Post(
    user_id = 4, caption = 'caption 9', location = 'Finland')
  tenc = Post(
    user_id = 4, caption = 'caption 10', location = 'United Kingdom')
  elevenc = Post(
    user_id = 4, caption = 'caption 11', location = 'Yemen')
  twelvec = Post(
    user_id = 4, caption = 'caption 12', location = 'Oman')
  fourteenc = Post(
    user_id = 4, caption = 'caption 14', location = 'Zimbabwe')
  fifteenc = Post(
    user_id = 4, caption = 'caption 15', location = 'France')
  sixteenc = Post(
    user_id = 4, caption = 'caption 16', location = 'Peru')
  seventeenc = Post(
    user_id = 4, caption = 'caption 17', location = 'Qatar')
  eighteenc = Post(
    user_id = 4, caption = 'caption 18', location = 'Vanuatu')
  nineteenc = Post(
    user_id = 4, caption = 'caption 19', location = 'Rwanda')
  twentyc = Post(
    user_id = 4, caption = 'caption 20', location = 'Netherlands')
  oned = Post(
    user_id = 5, caption = 'caption 1', location = 'Australia')
  twod = Post(
    user_id = 5, caption = 'caption 2', location = 'Japan')
  threed = Post(
    user_id = 5, caption = 'caption 3', location = 'Canada')
  fourd = Post(
    user_id = 5, caption = 'caption 4', location = 'Denmark')
  fived = Post(
    user_id = 5, caption = 'caption 5', location = 'Germany')
  sixd = Post(
    user_id = 5, caption = 'caption 6', location = 'India')
  sevend = Post(
    user_id = 5, caption = 'caption 7', location = 'Hungary')
  eightd = Post(
    user_id = 5, caption = 'caption 8', location = 'China')
  nined = Post(
    user_id = 5, caption = 'caption 9', location = 'Finland')
  tend = Post(
    user_id = 5, caption = 'caption 10', location = 'United Kingdom')
  elevend = Post(
    user_id = 5, caption = 'caption 11', location = 'Yemen')
  twelved = Post(
    user_id = 5, caption = 'caption 12', location = 'Oman')
  fourteend = Post(
    user_id = 5, caption = 'caption 14', location = 'Zimbabwe')
  fifteend = Post(
    user_id = 5, caption = 'caption 15', location = 'France')
  sixteend = Post(
    user_id = 5, caption = 'caption 16', location = 'Peru')
  seventeend = Post(
    user_id = 5, caption = 'caption 17', location = 'Qatar')
  eighteend = Post(
    user_id = 5, caption = 'caption 18', location = 'Vanuatu')
  nineteend = Post(
    user_id = 5, caption = 'caption 19', location = 'Rwanda')
  twentyd = Post(
    user_id = 5, caption = 'caption 20', location = 'Netherlands')
