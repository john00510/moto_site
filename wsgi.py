import bjoern
from flask_app import app

host = '127.0.0.1'
port = 5000

if __name__ == "__main__":
    bjoern.run(app, host, port)
