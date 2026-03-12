import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentStreams, setCurrentStreams] = useState(10);
  const [currentSpeed, setCurrentSpeed] = useState(24.6);
  const [isOptimal, setIsOptimal] = useState(true);

  // Simulate AI adapting streams based on network conditions
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate stream count that stays mostly in optimal range 8-12
      const rand = Math.random();
      let newStreams;
      
      if (rand < 0.7) {
        // 70% chance to be in optimal range (8-12)
        newStreams = Math.floor(Math.random() * 5) + 8; // 8-12
      } else if (rand < 0.85) {
        // 15% chance to be low (1-7)
        newStreams = Math.floor(Math.random() * 7) + 1; // 1-7
      } else {
        // 15% chance to be high (13-16)
        newStreams = Math.floor(Math.random() * 4) + 13; // 13-16
      }
      
      const newSpeed = (Math.random() * 30 + 15).toFixed(1); // 15-45 Mbps
      
      setCurrentStreams(newStreams);
      setCurrentSpeed(newSpeed);
      setIsOptimal(newStreams >= 8 && newStreams <= 12);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            Supercharge Your Downloads with{' '}
            <span className="gradient-text">AI</span>
          </h1>
          <p className="hero-subtitle">
            TurboLane is the first download manager powered by Reinforcement Learning.
            It automatically optimizes connection streams between <strong>1-16</strong>{' '}
            to maintain the <strong className="optimal-text">optimal 8-12 range</strong>{' '}
            for maximum speed.
          </p>
          <div className="hero-buttons">
            <Link to="download" smooth={true} duration={500}>
              <button className="btn btn-primary">
                <FaDownload /> Download Now
              </button>
            </Link>
            <a 
              href="https://github.com/Adharsh0/TurboLane-Downloader.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10x</span>
              <span className="stat-label">Faster Downloads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">Powered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1-16</span>
              <span className="stat-label">Adaptive Streams</span>
            </div>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="/interface.PNG" alt="TurboLane Interface" />
          
          {/* Dynamic floating cards */}
          <div className="floating-card card-1">
            <span>AI Active</span>
            <div className="pulse"></div>
          </div>
          
          <div className={`floating-card card-2 ${isOptimal ? 'optimal' : 'adjusting'}`}>
            <div className="stream-info">
              <span className="stream-label">
                {isOptimal ? 'Optimal Range' : 'Adjusting...'}
              </span>
              <span className="stream-value">
                {currentStreams} streams
              </span>
            </div>
            <span className="speed">{currentSpeed} Mbps</span>
          </div>

          {/* Stream range indicator */}
          <div className="range-indicator-mini">
            <div className="range-track">
              <div 
                className="range-marker" 
                style={{ left: `${(currentStreams / 16) * 100}%` }}
              >
                <span className="marker-tooltip">{currentStreams}</span>
              </div>
              <div className="optimal-zone"></div>
            </div>
            <div className="range-labels">
              <span>1</span>
              <span>8</span>
              <span>12</span>
              <span>16</span>
            </div>
          </div>

          {/* Stream bars visualization */}
          <div className="stream-bars-mini">
            {[...Array(8)].map((_, i) => {
              const barHeight = 20 + Math.random() * 40;
              const isActiveStream = (i * 2) < currentStreams;
              const isInOptimal = (i * 2) >= 7 && (i * 2) <= 12;
              
              return (
                <div 
                  key={i}
                  className={`stream-bar-mini ${isActiveStream ? 'active' : 'inactive'} 
                    ${isInOptimal && isActiveStream ? 'optimal' : ''}`}
                  style={{ height: `${barHeight}%` }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;