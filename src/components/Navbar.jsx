import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whatsappLink =
    "https://wa.me/254782614845?text=Hi! I'm interested in booking a stay with Check in Airbnb.";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/accommodation", label: "Rooms" },
    { path: "/menu", label: "Menu" },
    { path: "/offers", label: "Offers" },
    { path: "/contact", label: "Contact" },
    { path: "/location", label: "Location" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(147, 112, 219, 0.15))",
        backdropFilter: "blur(16px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "12px 20px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "10px",
        zIndex: 1000,
        boxShadow: "0 8px 32px rgba(255, 105, 180, 0.15)",
      }}
    >
      {/* Logo and Title */}
      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={logo}
              alt="CheckIn Stays Logo"
              style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(255, 105, 180, 0.3)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
            <div style={{
              position: "absolute",
              bottom: "-4px",
              right: "-4px",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #FF69B4, #9370DB)",
              border: "2px solid white",
              zIndex: 2
            }}></div>
          </div>
          <div>
            <span
              style={{
                background: "linear-gradient(45deg, #FF69B4, #9370DB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
                fontSize: "22px",
                whiteSpace: "nowrap",
                fontFamily: "'Playfair Display', serif",
                textShadow: "0 2px 4px rgba(255, 105, 180, 0.2)",
                display: "block",
                lineHeight: "1.2"
              }}
            >
              CheckIn Stays
            </span>
            <span
              style={{
                color: "#9370DB",
                fontSize: "12px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                opacity: 0.8,
                display: "block",
                marginTop: "-2px"
              }}
            >
              Woman-Owned Luxury
            </span>
          </div>
        </Link>
      </div>

      {/* Toggler (always visible on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#9370DB",
          fontSize: "24px",
          cursor: "pointer",
          marginLeft: "auto",
          display: "block",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "linear-gradient(135deg, rgba(255, 105, 180, 0.9), rgba(147, 112, 219, 0.85))",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                color: isActive(link.path) ? "#fff" : "rgba(255, 255, 255, 0.9)",
                fontWeight: isActive(link.path) ? "bold" : "600",
                textDecoration: "none",
                fontSize: "16px",
                padding: "10px 15px",
                borderRadius: "10px",
                background: isActive(link.path)
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
                transition: "all 0.3s ease",
                borderLeft: isActive(link.path) 
                  ? "3px solid #fff" 
                  : "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(45deg, #25D366, #128C7E)",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "16px",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              marginTop: "8px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
            }}
          >
            💬 WhatsApp Booking
          </a>
        </div>
      )}

      {/* Desktop Links */}
      <div style={{ display: "none" }} className="desktop-links">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color: isActive(link.path) ? "#9370DB" : "#555",
              fontWeight: isActive(link.path) ? "bold" : "600",
              textDecoration: "none",
              marginLeft: "20px",
              fontSize: "16px",
              padding: "8px 12px",
              borderRadius: "8px",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive(link.path)) {
                e.target.style.color = "#FF69B4";
                e.target.style.background = "rgba(255, 105, 180, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(link.path)) {
                e.target.style.color = "#555";
                e.target.style.background = "transparent";
              }
            }}
          >
            {link.label}
            {isActive(link.path) && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30px",
                  height: "3px",
                  background: "linear-gradient(45deg, #FF69B4, #9370DB)",
                  borderRadius: "2px",
                }}
              ></span>
            )}
          </Link>
        ))}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "20px",
            background: "linear-gradient(45deg, #25D366, #128C7E)",
            color: "white",
            padding: "10px 16px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
          }}
        >
          💬 Book Now
        </a>
      </div>

      {/* Inline Media Queries */}
      <style>
        {`
          @media(min-width:768px){
            .desktop-links{ display:flex !important; align-items:center; }
            nav button{ display:none !important; }
            nav div[style*="position: absolute"]{ display:none !important; }
          }
          
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        `}
      </style>
    </nav>
  );
};

export default Navbar;