import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ Import logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whatsappLink =
    "https://wa.me/254721635810?text=Hi! I'm interested in booking a stay with Check in Airbnb.";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/accommodation", label: "Rooms" },
    { path: "/menu", label: "Menu" },
    { path: "/offers", label: "Offers" },
    { path: "/gallery", label: "Gallery" },
    { path: "/location", label: "Location" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "10px 15px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "8px",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Checkin Airbnb Logo"
            style={{ width: "34px", height: "34px", borderRadius: "6px" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "18px",
              whiteSpace: "nowrap",
            }}
          >
            checkinairbnbfedha.co.ke
          </span>
        </Link>
      </div>

      {/* Toggler (always visible on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
          marginLeft: "auto",
          display: "block",
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
            background: "rgba(0,0,0,0.85)",
            borderRadius: "8px",
            marginTop: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "15px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                color: isActive(link.path) ? "#4facfe" : "#fff",
                fontWeight: isActive(link.path) ? "bold" : "normal",
                textDecoration: "none",
                fontSize: "16px",
                padding: "8px 12px",
                borderRadius: "6px",
                background: isActive(link.path)
                  ? "rgba(79,172,254,0.15)"
                  : "transparent",
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
              background: "linear-gradient(45deg,#25D366,#128C7E)",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "16px",
              boxShadow: "0 4px 10px rgba(37,211,102,0.3)",
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
              color: isActive(link.path) ? "#4facfe" : "#fff",
              fontWeight: isActive(link.path) ? "bold" : "normal",
              textDecoration: "none",
              marginLeft: "15px",
              fontSize: "16px",
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
            marginLeft: "15px",
            background: "linear-gradient(45deg,#25D366,#128C7E)",
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px",
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
        `}
      </style>
    </nav>
  );
};

export default Navbar;
