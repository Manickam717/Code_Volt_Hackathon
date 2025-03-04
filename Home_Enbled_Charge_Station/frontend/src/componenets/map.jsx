import { GoogleMap, LoadScript, Marker, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import './map.css';

// Add this new component for the custom alert
const CustomAlert = ({ message, onClose }) => (
  <div className="custom-alert">
    <div className="custom-alert-content">
      <div className="alert-icon">
        <i className="fas fa-check-circle"></i>
      </div>
      <h3>Success!</h3>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

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
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedUserLocation, setSelectedUserLocation] = useState(false);
  const [stationDetails, setStationDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
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

  // Custom marker icons - Fixed version
  const availableIcon = {
    path: "M 0 0 m -2, 0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0",
    scale: 12,
    fillColor: '#00FF00',
    fillOpacity: 0.8,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    labelOrigin: { x: 0, y: -20 }
  };

  const unavailableIcon = {
    path: "M 0 0 m -2, 0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0",
    scale: 12,
    fillColor: '#FF0000',
    fillOpacity: 0.8,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    labelOrigin: { x: 0, y: -20 }
  };

  // Custom directions renderer options - Fixed version
  const directionsRendererOptions = {
    polylineOptions: {
      strokeColor: '#4285F4',
      strokeWeight: 5,
      strokeOpacity: 0.8,
      icons: [{
        icon: {
          path: "M 0,-1 0,1",
          strokeOpacity: 1,
          scale: 4
        },
        offset: '50%',
        repeat: '100px'
      }]
    }
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
          
          // Fetch charging stations after getting user position
          fetch('http://127.0.0.1:5000/home', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPosition),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
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
            }
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching stations:', error);
            setServerError(true);
            setIsLoading(false);
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
        },
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIsLoading(false);
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
        if (data.status === 'succes') {
          setAlertMessage(`Your booking key is: ${data.key}`);
          setShowAlert(true);
          setBookingKey(data.key);
          setShowBookingDetails(false);
          setBookingResponse(null);
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
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Loading map data...</p>
          </div>
        )}
        
        {serverError && (
          <div className="error-overlay">
            <p>Unable to connect to server. Please check if the backend server is running.</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

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
              options={{
                styles: [
                  {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [{ color: "#242f3e" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#242f3e" }]
                  },
                  {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#746855" }]
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }]
                  }
                ]
              }}
            >
              {currentPosition && (
                <Marker
                  position={currentPosition}
                  icon={{
                    path: "M 0 0 m -2, 0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0",
                    scale: 10,
                    fillColor: '#4285F4',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                  }}
                  onClick={() => setSelectedUserLocation(true)}
                />
              )}

              {chargingStations.map((station) => (
                <Marker
                  key={`${station.position.lat},${station.position.lng}`}
                  position={station.position}
                  icon={station.available ? availableIcon : unavailableIcon}
                  label={{
                    text: station.available ? 'Available' : 'Occupied',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                  onClick={() => {
                    setSelectedStation(station);
                    // Fetch station details
                    fetch(`http://127.0.0.1:5000/station_details/${station.position.lat}/${station.position.lng}`)
                      .then(response => response.json())
                      .then(data => setStationDetails(data))
                      .catch(error => console.error('Error fetching station details:', error));
                  }}
                />
              ))}

              {directions && (
                <DirectionsRenderer 
                  directions={directions} 
                  options={directionsRendererOptions}
                />
              )}

              {/* Station Info Window */}
              {selectedStation && stationDetails && (
                <InfoWindow
                  position={selectedStation.position}
                  onCloseClick={() => setSelectedStation(null)}
                >
                  <div className="station-info">
                    <h3>Charging Station Details</h3>
                    <p>Status: {selectedStation.available ? 'Available' : 'Occupied'}</p>
                    <p>Charging Types: {stationDetails.chargingTypes.join(', ')}</p>
                    <p>Power Output: {stationDetails.powerOutput} kW</p>
                    <p>Price per kWh: ₹{stationDetails.pricePerKwh}</p>
                    <p>Operating Hours: {stationDetails.operatingHours}</p>
                  </div>
                </InfoWindow>
              )}

              {/* User Location Info Window */}
              {selectedUserLocation && (
                <InfoWindow
                  position={currentPosition}
                  onCloseClick={() => setSelectedUserLocation(false)}
                >
                  <div className="user-info">
                    <h3>Your Vehicle Details</h3>
                    <p>Battery Level: 75%</p>
                    <p>Range: 150 km</p>
                    <p>Charging Type: Type 2</p>
                    <p>Last Charged: 2 hours ago</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </LoadScript>
        <button className="book-button" onClick={handleBookClick}>Book</button>

        {/* Enhanced Booking Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content booking-modal">
              <div className="modal-header">
                <h2>Book Charging Station</h2>
                <button className="close-button" onClick={() => setShowModal(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group">
                  <label>
                    <i className="fas fa-clock"></i>
                    Charging Duration (hours)
                  </label>
                  <input 
                    type="number" 
                    min="0.5" 
                    max="24" 
                    step="0.5"
                    value={chargingDuration} 
                    onChange={(e) => setChargingDuration(Number(e.target.value))} 
                  />
                </div>
                <div className="input-group">
                  <label>
                    <i className="fas fa-bicycle"></i>
                    Mode of Transport
                  </label>
                  <select value={transportMode} onChange={(e) => setTransportMode(e.target.value)}>
                    <option value="Bike">Bike</option>
                    <option value="Walk">Walk</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="cancel-button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="submit-button" onClick={handleModalSubmit}>
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Booking Details Modal */}
        {showBookingDetails && bookingResponse && (
          <div className="modal">
            <div className="modal-content booking-details-modal">
              <div className="modal-header">
                <h2>Booking Summary</h2>
                <button className="close-button" onClick={() => setShowBookingDetails(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="booking-details">
                  <div className="detail-item">
                    <i className="fas fa-rupee-sign"></i>
                    <span>Cost:</span>
                    <strong>₹{bookingResponse.cost}</strong>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-play-circle"></i>
                    <span>Start Time:</span>
                    <strong>{new Date(bookingResponse.start).toLocaleString()}</strong>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-stop-circle"></i>
                    <span>End Time:</span>
                    <strong>{new Date(bookingResponse.stop).toLocaleString()}</strong>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="cancel-button" onClick={() => setShowBookingDetails(false)}>
                  Cancel
                </button>
                <button className="pay-button" onClick={handlePayment}>
                  <i className="fas fa-lock"></i> Pay Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Custom Alert */}
        {showAlert && (
          <CustomAlert 
            message={alertMessage} 
            onClose={() => setShowAlert(false)} 
          />
        )}
      </div>

      {/* Display Booking Key */}
      {bookingKey && (
        <div className="booking-key-display">
          <h3>Your Booking Key:</h3>
          <p>{bookingKey}</p>
        </div>
      )}
    </div>
  );
};

export default Map;