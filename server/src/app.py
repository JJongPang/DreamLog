from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
mongo = PyMongo(app)

CORS(app)

editor_db = mongo.db.editor


@app.route('/editor', methods=['POST'])
def post_editor_data():
    editor_data = editor_db.insert({
        'title': request.json['title'],
        'body': request.json['body'],
        'tag': request.json['tag'],
        'date': request.json['date']
    })
    return jsonify(str(ObjectId(editor_data)))


@app.route('/editor', methods=['GET'])
def get_editor_data():
    editor = []
    for doc in editor_db.find():
        editor.append({
            '_id': str(ObjectId(doc['_id'])),
            'title': doc['title'],
            'body': doc['body'],
            'tag': doc['tag'],
            'date': doc["date"]
        })
    return jsonify(editor)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
