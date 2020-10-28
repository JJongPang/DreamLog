from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
mongo = PyMongo(app)

CORS(app)

editor_db = mongo.db.editor


@app.route('/wrtie', methods=['POST'])
def post_editor_data():
    editor_data = editor_db.insert({
        'title': request.json['title'],
        'body': request.json['body'],
        'tags': request.json['tags'],
    })
    return jsonify(str(ObjectId(editor_data)))


@app.route('/wrtie', methods=['GET'])
def get_editor_data():
    editor = []
    for doc in editor_db.find():
        editor.append({
            '_id': str(ObjectId(doc['_id'])),
            'contentImage': doc['contentImage'],
            'title': doc['title'],
            'content': doc['content'],
            'date': doc["date"],
            'comment': doc["comment"],
            'userImage': doc["userImage"],
            "userId": doc["userId"],
            "subscribe": doc["subscribe"],
        })
    return jsonify(editor)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
