from flask import render_template, request
from flask_app import app

@app.route('/')
def index():
    return '<h1>Index Page.</h1>'
