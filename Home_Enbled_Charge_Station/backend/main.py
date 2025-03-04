from database import home_charge ,engine 
from flask import Flask ,request ,jsonify
from sqlalchemy.orm import sessionmaker
from features import Feature


##creating flask instance  
app = Flask(__name__)
feature = Feature(max_time = 1800 ,buffer = 900 )  

##
Session = sessionmaker(bind=engine)
session = Session()

##station data providing  
@app.route("/charging_station")
def home_station():
    data = request.get_json()
    obj = home_charge( 
        owner_nme = data.get("owner_nme"),
        owner_number = data.get("owner_number"),
        lat = data.get("lat"),
        lng = data.get("lng"),
        num_port = data.get("num_port")
    )
    session.add(obj)
    session.commit()
    return "success"


##home page route 
@app.route("/home")
def entry():
    data = request.get_json()
    location = (data.get("lat") ,data.get("lng") )
    response = feature.entry_request(location = location )
    return jsonify(response)

##single cve page data
@app.route("/nearest_station")
def nearesr_station():
    data = request.get_json()
    location = (data.get("lat") ,data.get("lng") )
    charge_duration = data.get("charge_duration")
    mode = data.get("mode")
    response = feature.second_request(location = location, 
                                      charge_duration = charge_duration ,
                                      mode = mode )
    return jsonify(response)

@app.route("/confirmation")
def booking_confirmation():
    data = request.get_json()
    old_timestamp = data.get("time_stamp")
    response = feature.third_request(ord_timestamp = old_timestamp )
    return jsonify(response)

if __name__ == "__main__" : 
    app.run(host="0.0.0.0", port=5000, debug=True)

    
            

