from flask import Blueprint, jsonify, request, g
from models.qplace import Qplace, QplaceSchema, Comment, CommentSchema
from models.type import Type
from lib.secure_route import secure_route

api = Blueprint('qplaces', __name__)
qplace_schema = QplaceSchema()
comment_schema = CommentSchema()

@api.route('/qplaces', methods=['GET'])
def index():
    qplaces = Qplace.query.all()
    return qplace_schema.jsonify(qplaces, many=True), 200

@api.route('/qplaces/<int:qplace_id>', methods=['GET'])
def show(qplace_id):
    qplace = Qplace.query.get(qplace_id)
    if not qplace:
        return jsonify({'message': 'not found'}), 404
    return qplace_schema.jsonify(qplace), 200

@api.route('/qplaces', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    qplace, errors = qplace_schema.load(data)
    if errors:
        return jsonify(errors), 422
    if data.get('type_id', None):
        qplace.type = Type.query.get(data['type_id'])
    qplace.creator = g.current_user
    qplace.save()
    return qplace_schema.jsonify(qplace), 201

@api.route('/qplaces/<int:qplace_id>', methods=['DELETE'])
def delete(qplace_id):
    qplace = Qplace.query.get(qplace_id)
    if not qplace:
        return jsonify({'message': 'Not Found'})
    qplace.remove()
    return '', 204

@api.route('/qplaces/<int:qplace_id>/comments', methods=['POST'])
def comment_create(qplace_id):
    qplace = Qplace.query.get(qplace_id)
    if not qplace:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.qplace = qplace
    comment.save()
    return comment_schema.jsonify(comment), 202

@api.route('/qplaces/<int:qplace_id>/comments/<int:comment_id>', methods=['DELETE'])
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    if not comment:
        return jsonify({'message': 'Not Found'}), 404
    comment.remove()
    return '', 204

@api.route('/qplaces/<int:qplace_id>/like', methods=['POST'])
@secure_route
def like(qplace_id):
    qplace = Qplace.query.get(qplace_id)
    if not qplace:
        return jsonify({'message': 'Not Found'}), 404
    qplace.liked_by.append(g.current_user)
    qplace.save()
    return qplace_schema.jsonify(qplace), 201
