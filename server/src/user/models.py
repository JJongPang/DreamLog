from flask import Flask, request, jsonify
from passlib.hash import pbkdf2_sha256
from apptest import db


class User:
    def signup(self):
        user = {
            "username": request.json['username'],
            "password": request.json['password']
        }
        user['_id'] = str(user['_id'])
        user["password"] = pbkdf2_sha256.encrypt(user["password"])

    db.users.insert_one(user)

    return jsonify(user), 200
