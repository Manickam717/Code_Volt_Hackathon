import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import './map.css';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [chargingStations, setChargingStations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [chargingDuration, setChargingDuration] = useState(1);
  const [transportMode, setTransportMode] = useState('Car');
  const [bookingResponse, setBookingResponse] = useState(null);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [bookingKey, setBookingKey] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  
  // Container style for the map
  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  // Default center position (fallback if geolocation fails)
  const defaultCenter = {
    lat: 40.7128,
    lng: -74.0060
  };

  useEffect(() => {
    // Get user's current position with high accuracy
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentPosition(userPosition);
          console.log("Current Position:", userPosition); // Log the current position
          
          // Fetch charging stations after getting user position
          fetch('http://127.0.0.1:5000/home', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPosition),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Fetched data:', data); // Log the fetched data
            // Check if data.active and data.notactive exist
            if (data.active && data.notactive) {
              const allStations = [
                ...data.active.map(station => ({
                  position: { lat: station[0], lng: station[1] },
                  available: true
                })),
                ...data.notactive.map(station => ({
                  position: { lat: station[0], lng: station[1] },
                  available: false
                }))
              ];
              setChargingStations(allStations);
            } else {
              console.error('Data structure is not as expected:', data);
            }
          })
          .catch((error) => console.error('Error fetching stations:', error));
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleBookClick = () => {
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    if (currentPosition) {
      const bookingDetails = {
        lat: currentPosition.lat,
        lng: currentPosition.lng,
        charge_duration: chargingDuration * 3600,
        mod: transportMode.toLowerCase()
      };
      fetch('http://127.0.0.1:5000/nearest_station', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      })
      .then(response => response.json())
      .then(data => {
        setBookingResponse(data);
        setShowBookingDetails(true);
        // Store the nearest station coordinates
        console.log("dxReceived data:", data); // Log the received data
        const nearest = {
          lat: parseFloat(data.lat), // Ensure it's a number
          lng: parseFloat(data.lng)  // Ensure it's a number
        };
        console.log("Nearest Station Coordinates:", nearest); // Log the nearest station coordinates
        setNearestStation(nearest);
        // Store the timestamp in the state variable
        setTimestamp(data.timestamp); // Assuming the timestamp is in the response
      })
      .catch((error) => console.error('Error:', error));
    } else {
      alert('Current position is not available.');
    }
    setShowModal(false);
  };

  const handlePayment = () => {
    if (bookingResponse) {
      fetch('http://127.0.0.1:5000/confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ time_stamp: bookingResponse.timestamp }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Payment response:', data);
        if (data.status === 'succes') {
          console.log('Booking key:', data.key);
          setBookingKey(data.key);
          
          // Alert the booking key
          alert(`Your booking key is: ${data.key}`);
          
          // Optionally, force a re-render (not usually necessary)
          setTimeout(() => {
            setBookingKey(prev => prev);
          }, 100);
          
          setShowBookingDetails(false);
          setBookingResponse(null);
          
          // Navigate after successful payment
          calculateRoute();
        }
      })
      .catch((error) => console.error('Payment error:', error));
    }
  };

  // Add function to calculate route
  const calculateRoute = () => {
    if (window.google && currentPosition && nearestStation) {
      console.log("Calculating route from:", currentPosition, "to:", nearestStation);
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng),
          destination: new window.google.maps.LatLng(nearestStation.lat, nearestStation.lng),
          travelMode: transportMode === "Walk"
            ? window.google.maps.TravelMode.WALKING
            : window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result); // This will render the route on the map
          } else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
            console.error("No route found between the specified locations.");
            alert("No route found between your current location and the nearest station.");
          } else {
            console.error(`Directions request failed: ${status}`);
          }
        }
      );
    } else {
      console.error('Google Maps API is not loaded yet or required data is missing.');
    }
  };

  useEffect(() => {
    console.log("Updated booking key:", bookingKey);
  }, [bookingKey]);

  return (
    <div className="app-container">
      

      <div className="map-container">
        <LoadScript
          googleMapsApiKey="AIzaSyDUjbhIrHL8w13btxnPI57DKMwrGRHxON8"
          onLoad={() => {
            console.log("Google Maps API Loaded Successfully");
            setIsGoogleMapsLoaded(true);
          }}
          onError={() => console.error("Error loading Google Maps API")}
        >
          {isGoogleMapsLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentPosition || defaultCenter}
              zoom={15}
              className="google-map"
            >
              {currentPosition && (
                <Marker
                  position={currentPosition}
                  icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#4285F4',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                  }}
                />
              )}

              {/* Charging station markers */}
              {chargingStations.map((station) => (
                <Marker
                  key={`${station.position.lat},${station.position.lng}`}
                  position={station.position}
                  title={station.name}
                  icon={{
                    url: station.available 
                      ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                      : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                  }}
                  onClick={() => {
                    alert(`${station.name}\nAvailable: ${station.available ? 'Yes' : 'No'}`);
                  }}
                />
              ))}

              {/* Add DirectionsRenderer */}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          )}
        </LoadScript>
        <button className="book-button" onClick={handleBookClick}>Book</button>

        {/* Booking Details Modal */}
        {showBookingDetails && bookingResponse && (
          <div className="modal">
            <div className="modal-content">
              <h2>Booking Details</h2>
              <p>Cost: ₹{bookingResponse.cost}</p>
              <p>Start Time: {new Date(bookingResponse.start).toLocaleString()}</p>
              <p>End Time: {new Date(bookingResponse.stop).toLocaleString()}</p>
              <button onClick={handlePayment}>Pay</button>
              <button onClick={() => setShowBookingDetails(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Display Booking Key */}
        {bookingKey && (
          <div className="booking-key-display">
            <h3>Your Booking Key:</h3>
            <p>{bookingKey}</p>
          </div>
        )}
      </div>

      {/* Modal for booking details */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Details</h2>
            <label>
              Charging Duration (hours):
              <input 
                type="number" 
                min="0.5" 
                max="24" 
                step="0.5"
                value={chargingDuration} 
                onChange={(e) => setChargingDuration(Number(e.target.value))} 
              />
            </label>
            <label>
              Mode of Transport:
              <select value={transportMode} onChange={(e) => setTransportMode(e.target.value)}>
                <option value="Bike">Bike</option>
                <option value="Walk">Walk</option>
              </select>
            </label>
            <button onClick={handleModalSubmit}>Submit</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;