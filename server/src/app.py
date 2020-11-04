from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from datetime import datetime
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
import bcrypt
import jwt

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
app.secret_key = 'mysecret'
mongo = PyMongo(app)
CORS(app)

editor_db = mongo.db.write
user_db = mongo.db.user


class User:
    def signup(self):
        username = request.json['username']
        password = request.json['password']
        encode_password = password.encode('utf-8')
        user_data = {
            'username': username,
            'password': bcrypt.hashpw(encode_password, bcrypt.gensalt()),
        }

        if user_db.find_one({"username": user_data['username']}):
            return jsonify({"error": "username already in user_data"}), 500

        user_db.insert(user_data)
        user_data['_id'] = str(user_data['_id'])
        del user_data['password']

        return jsonify(user_data), 200

    def login(self):
        login_user = user_db.find_one({'username': request.json["username"]})

        if login_user:
            if bcrypt.hashpw(request.json['password'].encode('utf-8'), login_user['password']) == login_user['password']:
                session['username'] = request.json['username']

                return "login"

        return 'Invalid username or password'


@app.route('/register', methods=['POST'])
def signup():
    return User().signup()


@app.route('/login', methods=["POST"])
def login():
    return User().login()


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
