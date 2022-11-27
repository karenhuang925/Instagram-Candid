from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def email_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])

    last_name = StringField('last_name', validators=[DataRequired()])

    username = StringField('username', validators=[DataRequired(), username_exists])

    email = StringField('email', validators=[DataRequired(), email_exists])

    password = StringField('password', validators=[DataRequired()])
    
    biography = StringField('biography', validators=[DataRequired()])
    
    preview_image = StringField('preview_image', validators=[DataRequired()])