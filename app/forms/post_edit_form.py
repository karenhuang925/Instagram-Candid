from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, InputRequired, ValidationError
from app.models import post

class PostEditForm(FlaskForm):
    caption = StringField('caption', validators=[DataRequired(), InputRequired()])
    location = StringField('location', validators=[DataRequired(), InputRequired()])
    submit = SubmitField('Done')