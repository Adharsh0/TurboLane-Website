import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">TurboLane</span>
          <span className="logo-badge">AI</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="features" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="ai-showcase" smooth={true} duration={500} onClick={() => setIsOpen(false)}>AI Engine</Link>
          <Link to="how-it-works" smooth={true} duration={500} onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link to="download" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            <button className="nav-download-btn">Download</button>
          </Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;