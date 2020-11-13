from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo, ObjectId

app = Flask(__name__)
CORS(app, supports_credentials=True)
mongo = PyMongo(app)
