from database import home_charge ,engine 
from sqlalchemy.orm import sessionmaker
from map_service import MapService 
import time
import random 

Session = sessionmaker(bind=engine)
session = Session()

class Home:
    ##status true means active else not active  
    def __init__(self ,home_charge_obj ):
        self.charge = home_charge_obj
        self.available_port = home_charge_obj.num_port
        self.status = self.__is_active() 
        self.booked = False
        self.name = home_charge_obj.owner_nme
        self.location = (home_charge_obj.lat ,home_charge_obj.lng)
        self.booked_till = None

    def __is_active(self):
        return random.random() < 0.7    

class Feature: 
    time_stamp_booking = { }
    
    def __init__(self ,max_time ,buffer):
        self.max_time = max_time 
        self.buffer = buffer
        self.per_sec_cst = 0.005

        self.home_list = [ ]
        db_objs = session.query(home_charge).all()
        if db_objs : 
            for obj in db_objs : 
                self.home_list.append( Home(obj) )
        
        self.map = MapService()

    
    ##request made when the rider first enters the app 
    def entry_request(self ,location):
        response = {  "active" : [ ],  "notactive" : [ ]  }

        for obj in self.home_list:
            
            time_taken = self.map.travel_duration(
                 source = location , 
                 destination = obj.location, 
                )
                    
            if time_taken <= self.max_time:
                
                if obj.status :
                    response["active"].append( 
                        (
                         float(obj.charge.lat) , 
                         float(obj.charge.lng)
                        )
                    )

                else:
                    response["notactive"].append( 
                        ( 
                         float(obj.charge.lat) , 
                         float(obj.charge.lng) 
                        )
                    )
        return response  
    
    ##trying to make booking 
    def second_request(self ,location ,charge_duration ,mode):
        home_cost = { }

        for obj in self.home_list:
            
            time_taken = self.map.travel_duration(
                source = location , 
                destination = obj.location , 
                mode = mode
                )
            
            if time_taken < self.max_time and obj.status :
                if obj.booked : ##particular case not handled  
                    pass
                else:
                    ##if the home is not booked time taken to reach is the cost 
                    home_cost[obj] = time_taken 
        
        sorted_dict = dict(sorted(home_cost.items(), key=lambda item: item[1]))
        choosed_home = list(sorted_dict.keys())[0]
        cost = self.per_sec_cst * charge_duration ##charging for every second  
        time_stamp = time.time( )
        response = { 
            "lat" : choosed_home.location[0] ,
            "lng" : choosed_home.location[1] ,
            "cost" : cost,
            "timestamp" : time_stamp ,
            "start" : time_stamp + 30,
            "stop" : time_stamp + 30 + charge_duration + self.buffer
        }
        self.time_stamp_booking[time_stamp] = choosed_home
        print(response) 
        return response 
 
    
    ## booking confirmation 
    def third_request(self ,ord_timestamp):
        response = { "status" : "fail" ,"key":None }

        if ord_timestamp in self.time_stamp_booking.keys():
            obj = self.time_stamp_booking[ord_timestamp]
            
            if not obj.booked :
                obj.booked = True 
                response["status"] = "succes"
                response["key"] = "as#fg#12D"

        return response

        



                
        






    




        
        
    
            

        



