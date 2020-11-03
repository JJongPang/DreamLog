from flask import Flask
from apptest import app
from user.models import User


@app.route('/register' methods=["POST"])
def sing_up():
    return User().singup()
