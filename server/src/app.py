from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/dreamlog'
mongo = PyMongo(app)

CORS(app)

editor_db = mongo.db.write


@app.route('/write', methods=['POST'])
def post_editor_data():
    editor_data = editor_db.insert({
        'title': request.json['title'],
        'body': request.json['body'],
        'tags': request.json['tags'],
    })
    return jsonify(str(ObjectId(editor_data)))


@app.route('/write/<id>', methods=['GET'])
def get_editor_data(id):
    editor_data = editor_db.find_one({'_id': ObjectId(id)})
    return jsonify({
        '_id': str(ObjectId(editor_data['_id'])),
        'title': editor_data['title'],
        'body': editor_data['body'],
        'tags': editor_data['tags']
    })


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
