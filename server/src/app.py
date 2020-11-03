from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from datetime import datetime
import bcrypt


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'

mongo = PyMongo(app)
CORS(app)

editor_db = mongo.db.write
user_db = mongo.db.user


@app.route('/register', methods=['POST'])
def sign_up():
    username = request.json['username']
    password = request.json['password']
    encode_password = password.encode('utf-8')
    user_data = {
        'username': username,
        'hashedPassword': bcrypt.hashpw(encode_password, bcrypt.gensalt()),
    }
    user_db.insert(user_data)
    user_data['_id'] = str(user_data['_id'])
    del user_data['hashedPassword']
    return jsonify(user_data)


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


@ app.route('/list', methods=['GET'])
def get_editor_list():
    list = []
    for li in editor_db.find():
        list.append({
            '_id': str(ObjectId(li['_id'])),
            'title': li['title'],
            'body': li['body'],
            'tags': li['tags'],
            'publish_date': li['publish_date'],
        })
    return jsonify(list)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
