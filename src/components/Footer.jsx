import React from 'react';
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TurboLane</h3>
            <p>AI-Powered Download Manager</p>
            <p className="copyright">© 2026 TurboLane. All rights reserved.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#download">Download</a></li>
              <li><a href="#how-it-works">Documentation</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/yourusername/turbolane">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://github.com/yourusername/turbolane"><FaGithub /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaDiscord /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
            <p className="newsletter-text">Subscribe to our newsletter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;