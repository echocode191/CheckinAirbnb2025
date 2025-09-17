import React, { useState } from "react";

const Location = () => {
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    padding: "12px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    margin: "5px",
  };

  const [userLocation, setUserLocation] = useState(null);

  const locations = [
    {
      name: "Fedha (Amana Heights)",
      coords: { lat: -1.3225, lng: 36.9026 },
      description: "Our premium location in Fedha with modern amenities",
    },
    {
      name: "Thika (Pilot Estate)",
      coords: { lat: -1.0446, lng: 37.094864 },
      description: "Spacious accommodations in the heart of Thika",
    },
  ];

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };

  const buildDirectionsUrl = (destination) => {
    if (!userLocation) {
      alert("Click 'Locate Me' first to enable directions.");
      return `https://www.google.com/maps?q=${destination.lat},${destination.lng}`;
    }
    return `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${destination.lat},${destination.lng}/data=!3m1!4b1!4m2!4m1!3e0`;
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>
        Our Locations
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button style={buttonStyle} onClick={handleLocateMe}>
          📍 Locate Me
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {locations.map((location, index) => (
          <div key={index} style={glassStyle}>
            <div style={{ padding: "20px" }}>
              <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>{location.name}</h2>
              <p style={{ fontSize: "16px", marginBottom: "15px", lineHeight: "1.4" }}>
                {location.description}
              </p>

              {/* Embedded Map */}
              <iframe
                title={location.name}
                src={`https://www.google.com/maps?q=${location.coords.lat},${location.coords.lng}&z=15&output=embed`}
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "12px",
                  border: "none",
                  marginBottom: "15px",
                }}
                loading="lazy"
              ></iframe>

              {/* Buttons */}
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href={`https://www.google.com/maps?q=${location.coords.lat},${location.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...buttonStyle, textDecoration: "none" }}
                >
                  🌍 View on Map
                </a>
                <a
                  href={buildDirectionsUrl(location.coords)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...buttonStyle, textDecoration: "none", background: "linear-gradient(45deg, #007bff, #0056b3)" }}
                >
                  🚗 Get Directions
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...glassStyle, padding: "20px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "15px", textAlign: "center" }}>
          Getting Here
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
          Our locations are easily accessible from Nairobi CBD and Jomo Kenyatta International Airport.
          We can arrange airport transfers upon request.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://wa.me/254721635810?text=Hi! I need information about airport transfers."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(45deg, #25D366, #128C7E)",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              fontSize: "16px",
            }}
          >
            💬 Arrange Transfer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
