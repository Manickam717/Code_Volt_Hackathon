from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from genai_interface import UserService

# Creating Flask instance
app = Flask(__name__)

# Enable CORS for the specific origin
CORS(app, origins=["http://localhost:5173"])  # Allow requests from localhost:5173


# User object mapping {user_name : user_obj}
user_dict = {}

# Start a chat
@app.route("/chat/<string:user_name>/<string:business_name>", methods=["POST"])
def chat(user_name, business_name):
    global user_dict 
    
    if user_name not in user_dict:
        user_dict[user_name] = UserService(business_name=business_name)
    
    req_data = request.get_json(silent=True)
    if not req_data or "request" not in req_data:
        return jsonify({"error": "Invalid request. JSON body with 'request' key is required"}), 400
    
    user_req = req_data.get("request")
    resp = user_dict[user_name].request(user_req)  # Assuming request method exists
    return jsonify({"response": resp}) 

if __name__ == "__main__":
    app.run(debug=True)
