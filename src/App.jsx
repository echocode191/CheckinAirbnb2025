import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Menu from './pages/Menu';
import Offers from './pages/Offers';

const Loader = () => (
  <div style={{
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)",
    color: "#fff",
    flexDirection: "column",
  }}>
    <div style={{
      width: "50px",
      height: "50px",
      border: "6px solid rgba(255,255,255,0.3)",
      borderTop: "6px solid #fff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
    <p style={{ marginTop: "15px", fontSize: "18px" }}>Loading...</p>

    {/* Inline keyframes for loader */}
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Auto refresh to new version when available
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.update();
        });
      });
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <main style={{ flex: "1 0 auto", paddingTop: '10px', paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
