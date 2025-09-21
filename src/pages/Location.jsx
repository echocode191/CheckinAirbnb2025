import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [watchId, setWatchId] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const userMarkerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const routePolylineRef = useRef(null);

  // Pink and purple color palette
  const glassStyle = {
    background: "linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(147, 112, 219, 0.1))",
    backdropFilter: "blur(16px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(255, 105, 180, 0.15)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #FF69B4, #9370DB)",
    border: "none",
    borderRadius: "50px",
    color: "white",
    padding: "14px 24px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontFamily: "'Nunito Sans', sans-serif",
    boxShadow: "0 4px 15px rgba(255, 105, 180, 0.3)",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(45deg, #25D366, #128C7E)",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
  };

  const fullscreenButtonStyle = {
    ...buttonStyle,
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1000,
    padding: '8px 16px',
    fontSize: '14px',
  };

  const locations = [
    {
      id: 1,
      name: "Fedha (Amana Heights)",
      coords: { lat: -1.3225, lng: 36.9026 },
      description: "Our premium location in Fedha with modern amenities",
      address: "Amana Heights, Fedha, Nairobi",
    },
    {
      id: 2,
      name: "Thika (Pilot Estate)",
      coords: { lat: -1.0446, lng: 37.094864 },
      description: "Spacious accommodations in the heart of Thika",
      address: "Pilot Estate, Thika",
    },
  ];

  // Calculate midpoint between Fedha and Thika
  const midpoint = {
    lat: (locations[0].coords.lat + locations[1].coords.lat) / 2,
    lng: (locations[0].coords.lng + locations[1].coords.lng) / 2
  };

  // Calculate route using OSRM (free routing service)
  const calculateRoute = async (origin, destination) => {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`
      );
      const data = await response.json();
      
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        setRoute(route.geometry.coordinates);
        setDistance((route.distance / 1000).toFixed(2) + " km");
        setDuration(Math.round(route.duration / 60) + " min");
        
        return route;
      }
    } catch (error) {
      console.error("Error calculating route:", error);
    }
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    // Check for HTTPS connection (geolocation usually requires it)
    if (location.protocol !== 'https:' && 
        location.hostname !== 'localhost' && 
        location.hostname !== '127.0.0.1') {
      alert("Geolocation requires HTTPS. Please use a secure connection.");
      return;
    }

    setIsLoadingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(userPos);
        setIsLoadingLocation(false);
      },
      (error) => {
        let errorMessage = "Unable to get your location. ";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += "Location access denied by user.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage += "Location request timed out.";
            break;
          default:
            errorMessage += "An unknown error occurred.";
            break;
        }
        console.error("Error getting location:", error);
        alert(errorMessage);
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const handleSelectDestination = (location) => {
    setDestination(location);
    
    if (userLocation) {
      calculateRoute(userLocation, location.coords);
    } else {
      handleLocateMe();
      setTimeout(() => {
        if (userLocation) {
          calculateRoute(userLocation, location.coords);
        }
      }, 1000);
    }
  };

  const startNavigation = () => {
    if (!userLocation || !destination) {
      alert("Please select a destination and ensure your location is detected.");
      return;
    }

    setIsNavigating(true);
    
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const newPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(newPos);

        // Recalculate route
        calculateRoute(newPos, destination.coords);

        // Calculate distance to destination
        const distanceToDestination = calculateDistance(
          newPos.lat,
          newPos.lng,
          destination.coords.lat,
          destination.coords.lng
        );

        if (distanceToDestination < 0.05) { // 50 meters
          stopNavigation();
          alert("You have arrived at your destination!");
        }
      },
      (error) => {
        console.error("Error watching position:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );

    setWatchId(id);
  };

  const stopNavigation = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsNavigating(false);
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI/180);
  };

  // Custom user location icon
  const userIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Custom destination icon
  const destinationIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Default location icon
  const defaultLocationIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Fullscreen functionality
  const toggleFullscreen = () => {
    if (!mapContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      mapContainerRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div style={{ 
      padding: "20px",
      background: 'linear-gradient(145deg, #fff0f5, #f3e5ff)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255, 105, 180, 0.1), rgba(147, 112, 219, 0.1))',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(147, 112, 219, 0.1), rgba(255, 105, 180, 0.1))',
        zIndex: 0
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 6vw, 42px)', 
            marginBottom: '15px', 
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            textShadow: '0 2px 10px rgba(147, 112, 219, 0.2)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            Our Locations
          </h1>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 18px)', 
            maxWidth: '600px', 
            margin: '0 auto',
            color: '#555'
          }}>
            Find your way to our premium accommodations with real-time navigation
          </p>
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button 
            style={buttonStyle} 
            onClick={handleLocateMe}
            disabled={isLoadingLocation}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
            }}
          >
            {isLoadingLocation ? '🔄 Getting Location...' : '📍 Locate Me'}
          </button>
        </div>

        {/* Navigation Status */}
        {isNavigating && (
          <div style={{
            ...glassStyle,
            padding: '15px',
            marginBottom: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#25D366',
                animation: 'pulse 1.5s infinite'
              }}></div>
              <span style={{ fontWeight: 'bold', color: '#9370DB' }}>Navigating to {destination?.name}</span>
            </div>
            {distance && duration && (
              <div style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
                Distance: {distance} • Duration: {duration}
              </div>
            )}
            <button 
              style={{
                ...secondaryButtonStyle,
                marginTop: '10px',
                fontSize: '14px',
                padding: '8px 16px'
              }}
              onClick={stopNavigation}
            >
              Stop Navigation
            </button>
          </div>
        )}

        {/* Map Container */}
        <div style={{
          ...glassStyle,
          padding: '20px',
          marginBottom: '30px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div 
            ref={mapContainerRef}
            style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <MapContainer 
              center={[midpoint.lat, midpoint.lng]} 
              zoom={10} 
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Default location markers */}
              {locations.map(location => (
                <Marker 
                  key={location.id}
                  position={[location.coords.lat, location.coords.lng]} 
                  icon={location.id === destination?.id ? destinationIcon : defaultLocationIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
              
              {/* User location marker */}
              {userLocation && (
                <Marker 
                  position={[userLocation.lat, userLocation.lng]} 
                  icon={userIcon}
                >
                  <Popup>Your Location</Popup>
                </Marker>
              )}
              
              {/* Route polyline */}
              {route && (
                <Polyline 
                  positions={route.map(coord => [coord[1], coord[0]])} 
                  color="#FF69B4"
                  weight={5}
                  opacity={0.8}
                />
              )}
            </MapContainer>
            
            {/* Fullscreen Button */}
            <button
              style={fullscreenButtonStyle}
              onClick={toggleFullscreen}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
              }}
            >
              {isFullscreen ? '⛶ Exit Fullscreen' : '⛶ Fullscreen'}
            </button>
          </div>
          
          {/* Enhanced Route Summary - Always visible when route exists */}
          {route && (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 255, 0.95))',
              borderRadius: '16px',
              border: '1px solid rgba(147, 112, 219, 0.3)',
              boxShadow: '0 8px 25px rgba(147, 112, 219, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              animation: 'fadeIn 0.5s ease-in-out'
            }}>
              {/* Decorative corner element */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FF69B4, #9370DB)',
                opacity: '0.1',
                borderRadius: '0 0 0 100%',
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #FF69B4, #9370DB)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    color: 'white',
                    fontSize: '20px'
                  }}>
                    🧭
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    color: '#9370DB',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '22px',
                    fontWeight: '600'
                  }}>
                    Route Summary
                  </h3>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{
                    background: 'rgba(255, 105, 180, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ fontSize: '24px', marginRight: '10px' }}>📏</div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>DISTANCE</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#9370DB' }}>{distance}</div>
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(147, 112, 219, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <div style={{ fontSize: '24px', marginRight: '10px' }}>⏱️</div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>EST. TIME</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#9370DB' }}>{duration}</div>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(37, 211, 102, 0.1)',
                  padding: '12px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '24px', marginRight: '10px' }}>📍</div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>DESTINATION</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#9370DB' }}>{destination?.name}</div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                  <button
                    style={{
                      ...buttonStyle,
                      fontSize: '14px',
                      padding: '10px 20px',
                      background: 'linear-gradient(45deg, #25D366, #128C7E)',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                    }}
                    onClick={startNavigation}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    {isNavigating ? '🔄 Updating Route...' : '▶️ Start Navigation'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Location Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {locations.map((location) => (
            <div key={location.id} style={glassStyle}>
              <div style={{ padding: '20px' }}>
                <h2 style={{ 
                  fontSize: '22px', 
                  marginBottom: '10px',
                  color: '#9370DB',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {location.name}
                </h2>
                <p style={{ fontSize: '16px', marginBottom: '15px', lineHeight: '1.4', color: '#555' }}>
                  {location.description}
                </p>
                <p style={{ fontSize: '14px', marginBottom: '15px', color: '#666' }}>
                  📍 {location.address}
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <button
                    style={buttonStyle}
                    onClick={() => handleSelectDestination(location)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                    }}
                  >
                    🧭 Navigate Here
                  </button>
                  
                  {destination?.id === location.id && userLocation && (
                    <button
                      style={isNavigating ? secondaryButtonStyle : buttonStyle}
                      onClick={isNavigating ? stopNavigation : startNavigation}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                      }}
                    >
                      {isNavigating ? '⏹️ Stop Navigation' : '▶️ Start Navigation'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Here Section */}
        <div style={{ 
          ...glassStyle, 
          padding: '30px', 
          marginTop: '30px',
          background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '15px', 
            textAlign: 'center',
            color: '#9370DB',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '600'
          }}>
            Getting Here
          </h2>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.5', 
            marginBottom: '20px',
            color: '#555',
            textAlign: 'center'
          }}>
            Our locations are easily accessible from Nairobi CBD and Jomo Kenyatta International Airport.
            We can arrange airport transfers upon request.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href="https://wa.me/254721635810?text=Hi! I need information about airport transfers."
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
              }}
            >
              💬 Arrange Transfer
            </a>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Location;