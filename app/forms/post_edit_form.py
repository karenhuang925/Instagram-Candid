from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import post

class PostEditForm(FlaskForm):
    caption = StringField('caption', validators=[DataRequired()])
    location = StringField('location', validators=[DataRequired()])