import React, { useState } from "react";

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

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    padding: "12px 18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "15px",
  };

  const whatsappButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(45deg, #25D366, #128C7E)",
  };

  const rooms = [
    {
      id: 1,
      name: "Studio Short Stay",
      location: "Fedha",
      price: "From KES 1500",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1170&q=80",
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
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1170&q=80",
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
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "26px", textAlign: "center", marginBottom: "20px" }}>
        Our Accommodations
      </h1>

      {isBookingConfirmed ? (
        <div style={{ ...glassStyle, padding: "40px 20px", textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "15px" }}>✅</div>
          <h2>Booking Request Sent!</h2>
          <p style={{ marginBottom: "20px" }}>
            Thank you for your booking request. We'll contact you shortly to
            confirm.
          </p>
          <button onClick={resetBooking} style={buttonStyle}>
            Make Another Booking
          </button>
        </div>
      ) : (
        <>
          {!selectedRoom && (
            <div>
              <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
                Select a Room
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px",
                }}
              >
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    style={{ ...glassStyle, overflow: "hidden", cursor: "pointer" }}
                    onClick={() => handleSelectRoom(room)}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: "15px" }}>
                      <h3>{room.name}</h3>
                      <p>{room.location}</p>
                      <p style={{ fontWeight: "bold" }}>{room.price}</p>
                      <button style={{ ...buttonStyle, width: "100%" }}>
                        Select Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedRoom && (
            <div style={{ ...glassStyle, padding: "20px" }}>
              <div style={{ display: "flex", marginBottom: "15px", gap: "15px" }}>
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div>
                  <h3>{selectedRoom.name}</h3>
                  <p>{selectedRoom.location}</p>
                </div>
              </div>

              <form onSubmit={handleSubmitBooking} style={{ display: "grid", gap: "15px" }}>
                {["name", "phone", "checkIn", "checkOut"].map((field) => (
                  <div key={field}>
                    <label style={{ fontSize: "14px", marginBottom: "5px", display: "block" }}>
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
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        background: "rgba(255,255,255,0.05)",
                        color: "white",
                      }}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize: "14px", marginBottom: "5px", display: "block" }}>
                    Duration/Package
                  </label>
                  <select
                    name="duration"
                    value={guestInfo.duration}
                    onChange={handleGuestInfoChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.3)",
                      background: "rgba(255,255,255,0.05)",
                      color: "white",
                    }}
                    required
                  >
                    <option value="">Select duration/package</option>
                    {selectedRoom.options.map((opt, idx) => (
                      <option key={idx} value={`${opt.name} - ${opt.price}`}>
                        {opt.name} - {opt.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(null)}
                    style={{
                      ...buttonStyle,
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    Back to Rooms
                  </button>
                  <button type="submit" style={buttonStyle}>
                    Submit Booking
                  </button>
                  <button type="button" onClick={bookViaWhatsApp} style={whatsappButtonStyle}>
                    Book via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Accommodation;

