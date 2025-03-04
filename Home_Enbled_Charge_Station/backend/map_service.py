import googlemaps

class MapService : 
    def __init__(self):
        self.gmaps = googlemaps.Client(key='AIzaSyBPZ0mMEC_Xl7heEVeZp8X3petpSfSpXbc')
        
    def travel_duration(self, source ,destination ,mode="driving"):
        assert isinstance(source, tuple) and isinstance(destination, tuple), "Source and destination must be tuples"
        result = self.gmaps.distance_matrix(source, destination, mode=mode)
        return result["rows"][0]["elements"][0]["duration"]["value"]
    
    