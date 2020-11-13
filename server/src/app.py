from flask import Flask, request, jsonify, make_response, Markup, Response
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo, ObjectId
from datetime import datetime
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, jwt_refresh_token_required, create_refresh_token, get_jwt_identity, set_access_cookies, set_refresh_cookies, unset_jwt_cookies
from flask_json_schema import JsonSchema
from flask_request_validator import validate_params, Param, GET, PATH, JSON, Pattern, MaxLength
from jsonschema import validate, ValidationError
import bcrypt
import math
from operator import itemgetter

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_SECRET_KEY'] = 'super-secret'
app.config['JWT_ACCESS_COOKIE_PATH'] = '/api/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
app.config['JWT_SECRET_KEY'] = 'super-secrets'

CORS(app, supports_credentials=True)
jwt = JWTManager(app)
mongo = PyMongo(app)

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
            return jsonify({"error": "username already in user_data"}), 409

        user_db.insert(user_data)
        user_data['_id'] = str(user_data['_id'])
        del user_data['password']

        access_token = create_access_token(identity=request.json["username"])
        refresh_token = create_refresh_token(identity=request.json["username"])
        resp = jsonify(user_data)
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)

        return resp, 200

    def login(self):
        login_user = user_db.find_one({'username': request.json["username"]})
        if login_user:
            if bcrypt.hashpw(request.json['password'].encode('utf-8'), login_user['password']) == login_user['password']:
                access_token = create_access_token(
                    identity=request.json["username"])
                refresh_token = create_refresh_token(
                    identity=request.json["username"])
                resp = jsonify({'login': True})
                set_access_cookies(resp, access_token)
                set_refresh_cookies(resp, refresh_token)

                return resp, 200

        return 'Invalid username or password', 404

    def logout(self):
        resp = jsonify({'logout': True})
        unset_jwt_cookies(resp)
        return resp, 200

    def check(self):
        username = get_jwt_identity()
        check_id = ObjectId()
        user_data = {
            "_id": str(check_id),
            "username": username
        }
        return jsonify(user_data), 200


class Write:
    def write(self):
        username = get_jwt_identity()
        if username is None:
            return 'logain please', 401
        else:
            editor_data = {
                'title': request.json['title'],
                'body': request.json['body'],
                'tags': request.json['tags'],
                'publish_date': datetime.now(),
                "user": {
                    'username': username
                }
            }
            if(editor_data["title"] == ''):
                return 'title please', 400
            elif(editor_data["body"] == ''):
                return 'body please', 400

            editor_db.insert(editor_data)
            editor_data['_id'] = str(editor_data['_id'])
            editor_data['user'].update({"_id": str(editor_data['_id'])})
            return jsonify(editor_data)


@ app.route('/token/register', methods=['POST'])
def signup():
    return User().signup()


@ app.route('/token/auth', methods=["POST"])
def login():
    return User().login()


@ app.route('/token/remove', methods=["POST"])
def logout():
    return User().logout()


@ app.route('/api/check', methods=["GET"])
@ jwt_required
def check():
    return User().check()


@ app.route('/api/write', methods=['POST'])
@ jwt_required
def post_editor_data():
    return Write().write()


@ app.route('/api/write/<id>', methods=['GET'])
def get_editor_data(id):
    id = {'_id': ObjectId(id)}
    find_id = editor_db.find_one(id)
    editor_data = {
        '_id': str(ObjectId(find_id['_id'])),
        'title': find_id['title'],
        'body': find_id['body'],
        'tags': find_id['tags'],
        'publish_date': find_id['publish_date'],
        "user": find_id['user'],
    }
    editor_data["user"].update({"_id": str(editor_data['_id'])})
    return jsonify(editor_data)


@ app.route('/api/delete/<id>', methods=['DELETE'])
@ jwt_required
def delete_editor(id):
    username = get_jwt_identity()
    check_id = editor_db.find_one({'_id': ObjectId(id)})["user"]["username"]

    if username != check_id:
        return 'not fail', 400
    else:
        editor_db.delete_one({'_id': ObjectId(id)})
        return jsonify({'msg': 'data delete'})


@ app.route('/api/update/<id>', methods=['PUT'])
@ jwt_required
def update_editor(id):
    username = get_jwt_identity()
    check_id = editor_db.find_one({'_id': ObjectId(id)})["user"]["username"]

    if username != check_id:
        return 'not fail', 400
    else:
        editor_data = {
            'title': request.json['title'],
            'body': request.json['body'],
            'tags': request.json['tags'],
            'publish_date': datetime.now(),
            "user": {
                '_id': str(id),
                'username': username
            }
        }
    editor_db.update_one({'_id': ObjectId(id)}, {'$set': editor_data})
    editor_data["_id"] = id
    return jsonify(editor_data)


@ app.route('/api/list', methods=['GET'])
def get_editor_list():
    # page = request.args.get("page", 1, type=int)
    # limit = 10
    # top_count = editor_db.find().count()
    # last_page_num = math.ceil(top_count / limit)
    lst = []
    editor_list = editor_db.find().sort("_id", -1)
    for li in editor_list:
        # .skip((page-1) * limit).limit(limit):
        edit_data = {
            '_id': str(ObjectId(li['_id'])),
            'title': li['title'],
            'body': Markup(li['body']).striptags()[0:50],
            'tags': li['tags'],
            'publish_date': li['publish_date'],
            "user": li['user']
        }
        lst.append(edit_data)

    # data = jsonify(lst)
    # headers = {'last-page': last_page_num}
    # resp = make_response(data)
    # resp.headers = headers
    return jsonify(lst)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
