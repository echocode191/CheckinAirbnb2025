import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.25)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1170&q=80", alt: "Luxury Suite", title: "Luxury Suite" },
    { id: 2, src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1170&q=80", alt: "Cozy Studio", title: "Cozy Studio" },
    { id: 3, src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1170&q=80", alt: "Family Apartment", title: "Family Apartment" },
    { id: 4, src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1170&q=80", alt: "Penthouse", title: "Penthouse" },
    { id: 5, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1170&q=80", alt: "Property Exterior", title: "Property Exterior" },
    { id: 6, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1170&q=80", alt: "Living Room", title: "Living Room" },
    { id: 7, src: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1170&q=80", alt: "Swimming Pool", title: "Swimming Pool" },
    { id: 8, src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1170&q=80", alt: "Dining Area", title: "Dining Area" },
  ];

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "40px", textAlign: "center", color: "#fff" }}>
        Our Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {galleryImages.map((image) => (
          <div
            key={image.id}
            style={{
              ...glassStyle,
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={{ padding: "12px" }}>
              <h3 style={{ fontSize: "18px", textAlign: "center", margin: 0, color: "#fff" }}>
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
            animation: "fadeIn 0.3s ease",
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(255, 255, 255, 0.25)",
                border: "none",
                color: "white",
                fontSize: "28px",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
