from app import db, ma
from .base import BaseModel, BaseSchema
# pylint: disable=W0611
from marshmallow import fields
from .type import Type
from .user import User

likes = db.Table(
    'likes',
    db.Column('qplace_id', db.Integer, db.ForeignKey('qplaces.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

# qplace_types = db.Table(
#     'qplace_types',
#     db.Column('qplace_id', db.Integer, db.ForeignKey('qplaces.id')),
#     db.Column('type_id', db.Integer, db.ForeignKey('types.id'))
# )

class Qplace(db.Model, BaseModel):

    __tablename__ = 'qplaces'

    name = db.Column(db.String(40), nullable=False, unique=True)
    image = db.Column(db.String(300), nullable=False)
    bio = db.Column(db.String(700), nullable=False)
    website = db.Column(db.String(300), nullable=False)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_qplaces')
    type_id = db.Column(db.Integer, db.ForeignKey('types.id'))
    type = db.relationship('Type', backref="qplaces")
    liked_by = db.relationship('User', secondary=likes, backref='likes')
    buildingNumber = db.Column(db.Float, nullable=False)
    street = db.Column(db.String(300), nullable=False)
    city = db.Column(db.String(300), nullable=False)
    postcode = db.Column(db.String(300), nullable=False)


class QplaceSchema(ma.ModelSchema, BaseSchema):
    creator = fields.Nested('UserSchema', only=('id', 'username'))
    type = fields.Nested('TypeSchema', only=('id', 'name'))
    comments = fields.Nested('CommentSchema', many=True, exclude=('qplace', 'created_at', 'updated_at'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Qplace

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.Text, nullable=False)
    qplace_id = db.Column(db.Integer, db.ForeignKey('qplaces.id'))
    qplace = db.relationship('Qplace', backref='comments')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
