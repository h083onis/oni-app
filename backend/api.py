import os
from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 環境変数からDB接続情報を取得
db_host = os.environ.get("DB_HOST")
db_user = os.environ.get("DB_USER")
db_password = os.environ.get("DB_PASSWORD")
db_name = os.environ.get("DB_NAME")

@app.route('/api/', methods=['GET'])
def home():
    return f"Connected to DB: {db_host}, User: {db_user}, DB Name: {db_name}"

if __name__ == "__main__":
    app.debug = True
    app.run(host='flask', port=5000)