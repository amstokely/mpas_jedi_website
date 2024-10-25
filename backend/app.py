from flask import Flask, request, jsonify
from flask_cors import CORS

TEST_RESULTS = {
    "10-19-2024": {
        "test1": "Failed",
        "test2": "Passed",
        "test3": "Passed",
    },
    "10-20-2024": {
        "test1": "Passed",
        "test2": "Passed",
        "test3": "Passed",
    },
    "10-21-2024": {
        "test1": "Passed",
        "test2": "Passed",
        "test3": "Passed",
    },
    "10-22-2024": {
        "test1": "Passed",
        "test2": "Passed",
        "test3": "Passed",
    },
    "10-23-2024": {
        "test1": "Passed",
        "test2": "Passed",
        "test3": "Passed",
    },
}

app = Flask(__name__)
CORS(app)


@app.route('/api/data', methods=['POST'])
def get_data():
    # Get the request data (expecting a string)
    data = request.get_json()

    value = TEST_RESULTS.get(data['key'], "Test not found.")
    return jsonify(value)


if __name__ == '__main__':
    app.run(debug=True)
