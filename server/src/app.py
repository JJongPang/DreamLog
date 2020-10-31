from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from datetime import datetime

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
app.config['JWT_SECRET_KEY'] = 'super-secrete'

mongo = PyMongo(app)
CORS(app)

editor_db = mongo.db.write
user_db = mongo.db.user


# @ app.route('/write', methods=['POST'])
# def post_editor_data():
#     editor_data = editor_db.insert({
#         'title': request.json['title'],
#         'body': request.json['body'],
#         'tags': request.json['tags'],
#         'publish_date': datetime.now()
#     })
#     return jsonify(str(ObjectId(editor_data)))

# @ app.route('/write', methods=['POST'])
# def post_editor_data():
#     editor_data = ({
#         'title': request.json['title'],
#         'body': request.json['body'],
#         'tags': request.json['tags'],
#         'publish_date': datetime.now()
#     })
#     editor_db.insert(editor_data)
#     return jsonify(str(editor_data))

# @ app.route('/write', methods=['POST'])
# def post_editor_data():
#     editor_data = {
#         'title': request.json['title'],
#         'body': request.json['body'],
#         'tags': request.json['tags'],
#         'publish_date': datetime.now()
#     }
#     editor_db.insert(editor_data)
#     return jsonify(editor_data)

@ app.route('/write', methods=['POST'])
def post_editor_data():
    editor_data = {
        'title': request.json['title'],
        'body': request.json['body'],
        'tags': request.json['tags'],
        'publish_date': datetime.now()
    }
    editor_db.insert(editor_data)
    editor_data['_id'] = str(editor_data['_id'])
    return jsonify(editor_data)


@ app.route('/write/<id>', methods=['GET'])
def get_editor_data(id):
    id = {'_id': ObjectId(id)}
    editor_data = editor_db.find_one(id)
    return jsonify({
        '_id': str(ObjectId(editor_data['_id'])),
        'title': editor_data['title'],
        'body': editor_data['body'],
        'tags': editor_data['tags'],
        'publish_date': editor_data['publish_date']
    })


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
