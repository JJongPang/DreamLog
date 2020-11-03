from flask import Flask, render_template, session, redirect
from functools import wraps
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient('localhost', 27017)
db = client.user_login_system


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
