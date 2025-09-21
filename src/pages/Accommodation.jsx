import React, { useState, useEffect } from "react";

const Accommodation = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    duration: "",
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Pink and purple color palette
  const glassStyle = {
    background: "linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(147, 112, 219, 0.1))",
    backdropFilter: "blur(16px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(255, 105, 180, 0.15)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
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

  const whatsappButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(45deg, #25D366, #128C7E)",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "none",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#333",
    fontSize: "16px",
    fontFamily: "'Nunito Sans', sans-serif",
    transition: "all 0.3s ease",
  };

  const rooms = [
    {
      id: 1,
      name: "Studio Short Stay",
      location: "Fedha",
      price: "From KES 1500",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1170&q=80",
      description: "Cozy and modern studio perfect for short stays",
      options: [
        { name: "Less than 4 hrs", price: "KES 1500", note: "Day Time" },
        { name: "Less than 8 hrs", price: "KES 1800", note: "Day Time" },
        { name: "Less than 10-12 hrs", price: "KES 2000" },
        { name: "Less than 13-17hrs", price: "KES 2200" },
        { name: "Less than 18-24 hrs", price: "KES 2500" },
        { name: "2 days", price: "KES 4500", note: "10am check out" },
        { name: "2 days", price: "KES 5000", note: "past 10am check out" },
        { name: "3 days", price: "KES 7000", note: "24hrs" },
        { name: "Per month", price: "KES 50,000", note: "utilities on you" },
      ],
    },
    {
      id: 2,
      name: "1 Bedroom Short Stay",
      location: "Fedha & Thika",
      price: "From KES 1800",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1170&q=80",
      description: "Spacious one-bedroom with all amenities",
      options: [
        { name: "Less than 4 hrs", price: "KES 1800", note: "Day Time" },
        { name: "Less than 8 hrs", price: "KES 2200", note: "Day Time" },
        { name: "Less than 10-12 hrs", price: "KES 2500" },
        { name: "Less than 13-17hrs", price: "KES 3000" },
        { name: "Less than 18-24 hrs", price: "KES 3500" },
        { name: "2 days", price: "KES 6500", note: "24 hrs" },
        { name: "3 days", price: "KES 10,000", note: "24hrs" },
        { name: "Per month", price: "KES 75,000", note: "utilities on you" },
      ],
    },
  ];

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setGuestInfo((prev) => ({ ...prev, roomType: room.name }));
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGuestInfoChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsBookingConfirmed(true);
  };

  const resetBooking = () => {
    setSelectedRoom(null);
    setIsBookingConfirmed(false);
    setGuestInfo({
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      duration: "",
    });
  };

  const bookViaWhatsApp = () => {
    const message = `Hi! I'd like to book the ${guestInfo.roomType}. My name is ${guestInfo.name}, phone: ${guestInfo.phone}. Check-in: ${guestInfo.checkIn}, Check-out: ${guestInfo.checkOut}, Duration: ${guestInfo.duration}.`;
    const url = `https://wa.me/254782614845?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsBookingConfirmed(true);
  };

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
            Our Accommodations
          </h1>
          <p style={{ 
            fontSize: 'clamp(16px, 3vw, 18px)', 
            maxWidth: '600px', 
            margin: '0 auto',
            color: '#555'
          }}>
            Choose from our carefully curated rooms designed for your comfort and convenience
          </p>
        </div>

        {isBookingConfirmed ? (
          <div style={{ 
            ...glassStyle, 
            padding: "40px 20px", 
            textAlign: "center",
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{ 
              fontSize: "64px", 
              marginBottom: "15px",
              animation: 'bounce 1s infinite alternate'
            }}>✅</div>
            <h2 style={{ 
              fontSize: '28px', 
              marginBottom: '15px',
              color: '#9370DB',
              fontFamily: "'Playfair Display', serif"
            }}>
              Booking Request Sent!
            </h2>
            <p style={{ 
              marginBottom: "30px",
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.6'
            }}>
              Thank you for your booking request. We'll contact you shortly to confirm your reservation.
            </p>
            <button 
              onClick={resetBooking} 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
              }}
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <>
            {!selectedRoom && (
              <div>
                <h2 style={{ 
                  textAlign: "center", 
                  marginBottom: "30px",
                  fontSize: '24px',
                  color: '#9370DB',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  Select a Room
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "25px",
                    marginBottom: '40px'
                  }}
                >
                  {rooms.map((room, index) => (
                    <div
                      key={room.id}
                      style={{ 
                        ...glassStyle, 
                        overflow: "hidden", 
                        cursor: "pointer",
                        transitionDelay: `${0.1 * index}s`
                      }}
                      onClick={() => handleSelectRoom(room)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 105, 180, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 105, 180, 0.15)';
                      }}
                    >
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={room.image}
                          alt={room.name}
                          style={{
                            width: "100%",
                            height: "220px",
                            objectFit: "cover",
                            transition: 'transform 0.5s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: 'rgba(255, 105, 180, 0.8)',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}>
                          {room.price}
                        </div>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h3 style={{ 
                          fontSize: '20px', 
                          marginBottom: '8px', 
                          color: '#333',
                          fontFamily: "'Playfair Display', serif"
                        }}>
                          {room.name}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ fontSize: '18px', marginRight: '8px' }}>📍</span>
                          <p style={{ fontSize: '16px', margin: 0, color: '#666' }}>{room.location}</p>
                        </div>
                        <p style={{ fontSize: '15px', color: '#555', marginBottom: '20px' }}>
                          {room.description}
                        </p>
                        <button 
                          style={{ ...buttonStyle, width: '100%' }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                          }}
                        >
                          Select Room
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedRoom && (
              <div style={{ 
                ...glassStyle, 
                padding: "30px",
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div style={{ 
                  display: "flex", 
                  marginBottom: "25px", 
                  gap: "20px",
                  alignItems: 'center'
                }}>
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "16px",
                      boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
                    }}
                  />
                  <div>
                    <h3 style={{ 
                      fontSize: '24px', 
                      marginBottom: '5px',
                      color: '#9370DB',
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      {selectedRoom.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                      <span style={{ fontSize: '16px', marginRight: '8px' }}>📍</span>
                      <p style={{ fontSize: '16px', margin: 0, color: '#666' }}>{selectedRoom.location}</p>
                    </div>
                    <p style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#FF69B4',
                      background: 'rgba(255, 105, 180, 0.1)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      display: 'inline-block'
                    }}>
                      {selectedRoom.price}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmitBooking} style={{ display: "grid", gap: "20px" }}>
                  {["name", "phone", "checkIn", "checkOut"].map((field, index) => (
                    <div key={field} style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${0.1 * index}s`
                    }}>
                      <label style={{ 
                        fontSize: "16px", 
                        marginBottom: "8px", 
                        display: "block",
                        color: '#555',
                        fontWeight: '600'
                      }}>
                        {field === "name"
                          ? "Full Name"
                          : field === "phone"
                          ? "Phone Number"
                          : field === "checkIn"
                          ? "Check-in Date"
                          : "Check-out Date"}
                      </label>
                      <input
                        type={field.includes("Date") ? "date" : "text"}
                        name={field}
                        value={guestInfo[field]}
                        onChange={handleGuestInfoChange}
                        style={inputStyle}
                        required
                        onFocus={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.2)";
                          e.target.style.boxShadow = "0 0 0 2px rgba(255, 105, 180, 0.5)";
                        }}
                        onBlur={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.1)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '0.4s'
                  }}>
                    <label style={{ 
                      fontSize: "16px", 
                      marginBottom: "8px", 
                      display: "block",
                      color: '#555',
                      fontWeight: '600'
                    }}>
                      Duration/Package
                    </label>
                    <select
                      name="duration"
                      value={guestInfo.duration}
                      onChange={handleGuestInfoChange}
                      style={inputStyle}
                      required
                      onFocus={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.2)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(255, 105, 180, 0.5)";
                      }}
                      onBlur={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select duration/package</option>
                      {selectedRoom.options.map((opt, idx) => (
                        <option key={idx} value={`${opt.name} - ${opt.price}`}>
                          {opt.name} - {opt.price} {opt.note ? `(${opt.note})` : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "15px",
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '0.5s'
                  }}>
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(null)}
                      style={secondaryButtonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.15)";
                      }}
                    >
                      ← Back to Rooms
                    </button>
                    <button 
                      type="submit" 
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
                      }}
                    >
                      Submit Booking
                    </button>
                    <button 
                      type="button" 
                      onClick={bookViaWhatsApp} 
                      style={whatsappButtonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                      }}
                    >
                      💬 Book via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes bounce {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito+Sans:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Accommodation;