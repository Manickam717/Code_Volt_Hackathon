import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import './map.css';

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [transportMode, setTransportMode] = useState('Car');
  
  // Static charging station data (this will be replaced with API data later)
  const chargingStations = [
    {
      id: 1,
      name: "EV Station 1",
      position: {
        lat:12.845030,
        lng: 80.133637
      },
      available: true
    },
    {
      id: 2,
      name: "EV Station 2",
      position: {
        lat: 12.835639,
        lng: 80.154895 
      },
      available: false
    },
    {
      id: 3,
      name: "EV Station 3",
      position: {
        lat: 40.7138,
        lng: -74.0048
      },
      available: true
    }
  ];

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
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
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
        position: currentPosition,
        startTime,
        endTime,
        transportMode
      };
      fetch('https://localhost:30000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    } else {
      alert('Current position is not available.');
    }
    setShowModal(false);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <span>BrandName</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Sell</a>
          <a href="#">Buy</a>
        </nav>
      </header>

      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyBBwZm07xk0_e82GeopVeuDd0YDm7ymdys">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition || defaultCenter}
            zoom={15}
            className="google-map"
          >
            {/* User's current location marker */}
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
                key={station.id}
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
          </GoogleMap>
        </LoadScript>
        <button className="book-button" onClick={handleBookClick}>Book</button>

        {/* Modal for booking details */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Booking Details</h2>
              <label>
                Start Time:
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              </label>
              <label>
                End Time:
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              </label>
              <label>
                Mode of Transport:
                <select value={transportMode} onChange={(e) => setTransportMode(e.target.value)}>
                  <option value="Car">Car</option>
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
    </div>
  );
};

export default Map;