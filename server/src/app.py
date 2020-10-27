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


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
