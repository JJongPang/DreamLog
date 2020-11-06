from flask import Flask, request, jsonify, session, redirect, url_for, make_response
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId
from datetime import datetime
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, jwt_refresh_token_required, create_refresh_token, get_jwt_identity, set_access_cookies, set_refresh_cookies, unset_jwt_cookies
import bcrypt


app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_SECRET_KEY'] = 'super-secret'
app.config['JWT_ACCESS_COOKIE_PATH'] = '/api/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
app.config['JWT_SECRET_KEY'] = 'super-secrets'
# app.secret_key = 'secret'
CORS(app)
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
        # return redirect(url_for('check'))
        # return 'register 완료'

        # refresh_token = create_refresh_token(
        #     identity=request.json["username"])
        # set_refresh_cookies(resp, refresh_token)

        access_token = create_access_token(identity=request.json["username"])
        resp = jsonify(user_data)
        set_access_cookies(resp, access_token)

        return resp, 200

    def login(self):
        login_user = user_db.find_one({'username': request.json["username"]})
        if login_user:
            if bcrypt.hashpw(request.json['password'].encode('utf-8'), login_user['password']) == login_user['password']:
                # token = jwt.encode({"username": request.json["username"]},
                #                    "secret", algorithm="HS256").decode("UTF-8")
                # session["username"] = request.json["username"]

                # set_refresh_cookies(resp, refresh_token)

                access_token = create_access_token(
                    identity=request.json["username"])

                refresh_token = create_refresh_token(
                    identity=request.json["username"])

                resp = jsonify({'login': True})
                set_access_cookies(resp, access_token)
                set_access_cookies(resp, refresh_token)

                return resp, 200

        return 'Invalid username or password', 404

    # def refresh(self):
    #     current_user = get_jwt_identity()
    #     access_token = create_access_token(identity=current_user)

    #     resp = jsonify({'refresh': True})
    #     set_access_cookies(resp, access_token)
    #     return resp, 200

    def logout(self):
        resp = jsonify({'logout': True})
        unset_jwt_cookies(resp)
        return resp, 200
        # session.pop('username', None)
        # return 'logout', 200

    def check(self):
        username = get_jwt_identity()
        return jsonify(username), 200
        # current_user = get_jwt_identity()

        # return jsonify(current_user), 200
        # if 'username' in session:
        #     return 'You are logged in as ' + session['username']
        # else:
        #     return 'login check fail'

        # return session['username']


class Write:
    def write(self):
        if 'username' not in session:
            return 'login please', 401
        else:
            editor_data = {
                'title': request.json['title'],
                'body': request.json['body'],
                'tags': request.json['tags'],
                'publish_date': datetime.now(),
                "user": {
                    'username': session["username"]
                }
            }
            editor_db.insert(editor_data)
            editor_data['_id'] = str(editor_data['_id'])

            return jsonify(editor_data)


@app.route('/token/register', methods=['POST'])
def signup():
    return User().signup()


@app.route('/token/auth', methods=["POST"])
def login():
    return User().login()


# @app.route('/token/refresh', methods=["POST"])
# @jwt_refresh_token_required
# def refresh():
#     return User().refresh()


@app.route('/token/remove', methods=["POST"])
def logout():
    return User().logout()


@app.route('/api/check', methods=["GET"])
@jwt_required
def check():
    return User().check()


@ app.route('/write', methods=['POST'])
def post_editor_data():
    return Write().write()


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
