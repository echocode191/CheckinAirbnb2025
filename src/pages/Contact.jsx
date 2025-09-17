import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "0782614845";
  const emailAddress = "echoworld191@gmail.com";
  const whatsappLink =
    "https://wa.me/254782614845?text=Hi! I have a question about your accommodations.";

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #4facfe, #00f2fe)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    padding: "14px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    fontSize: "16px",
    width: "100%",
  };

  const whatsappButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(45deg, #25D366, #128C7E)",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your message! We’ll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ padding: "0 15px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
        }}
      >
        {/* Form Section */}
        <div style={glassStyle}>
          <div style={{ padding: "25px" }}>
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#fff" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#fff" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#fff" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#fff" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{ ...inputStyle, resize: "none" }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div style={glassStyle}>
          <div style={{ padding: "25px" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "#fff" }}>
              Contact Information
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#fff" }}>📞 Phone</h3>
              <a
                href={`tel:${phoneNumber}`}
                style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
              >
                {phoneNumber}
              </a>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#fff" }}>✉️ Email</h3>
              <a
                href={`mailto:${emailAddress}`}
                style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}
              >
                {emailAddress}
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#fff" }}>💬 WhatsApp</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={whatsappButtonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


