from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from genai_interface import UserService

# Creating Flask instance
app = Flask(__name__)
CORS(app)
# Enable CORS for all origins
CORS(app, origins="*")  # Allow requests from any origin

# User object mapping {user_name : user_obj}
user_dict = {}

# Start a chat
@app.route("/chat/<string:session_id>/<string:user_name>/<string:business_name>", methods=["POST"])
def chat(session_id ,user_name, business_name):
    global user_dict 
    print(session_id,user_name,business_name)
    
    if (session_id,user_name) not in user_dict.keys():
        print("1")
        user_dict[(session_id,user_name)] = UserService(business_name=business_name)
    
    print("2")
    req_data = request.get_json(silent=True)
    print("3")
    if not req_data or "request" not in req_data:
        print("4")
        return jsonify({"error": "Invalid request. JSON body with 'request' key is required"}), 400
    print("5")
    user_req = req_data.get("request")
    print("6")
    resp = user_dict[(session_id,user_name)].request(user_req) 
    print("""over""") # Assuming request method exists
    return jsonify({"response": resp}) 

if __name__ == "__main__":
    app.run(debug=True)
