from marshmallow import fields
from app import db, ma
from .base import BaseModel, BaseSchema

class Type(db.Model, BaseModel):

    __tablename__ = 'types'

    name = db.Column(db.String(40), unique=True, nullable=False)

class TypeSchema(ma.ModelSchema, BaseSchema):
    qplaces = fields.Nested('QplaceSchema', many=True, only=('name', 'id'))

    class Meta:
        model = Type
