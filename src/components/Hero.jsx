import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaDownload, FaCode, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentStreams, setCurrentStreams] = useState(10);
  const [currentSpeed, setCurrentSpeed] = useState(24.6);
  const [isOptimal, setIsOptimal] = useState(true);

  // Simulate AI adapting streams based on network conditions
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      let newStreams;
      
      if (rand < 0.7) {
        newStreams = Math.floor(Math.random() * 5) + 8; // 8-12
      } else if (rand < 0.85) {
        newStreams = Math.floor(Math.random() * 7) + 1; // 1-7
      } else {
        newStreams = Math.floor(Math.random() * 4) + 13; // 13-16
      }
      
      const newSpeed = (Math.random() * 30 + 15).toFixed(1);
      
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
          <div className="hero-badge">
            <span className="badge-dot"></span>
            AI-Powered Transfer Technology
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">TurboLane</span>
          </h1>
          
          <p className="hero-subtitle">
            The first intelligent download ecosystem. Get the feature-rich download manager 
            or integrate RL-optimized transfers into your own applications.
          </p>

          <div className="hero-actions">
            <Link to="download" smooth={true} duration={500}>
              <button className="btn btn-primary">
                <FaDownload /> Download App
              </button>
            </Link>
            
            <Link to="turbolane-engine" smooth={true} duration={500}>
              <button className="btn btn-text">
                For Developers <FaArrowRight />
              </button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10x</span>
              <span className="stat-label">faster transfers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">RL</span>
              <span className="stat-label">reinforcement learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1-16</span>
              <span className="stat-label">adaptive streams</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual" data-aos="fade-left">
          <div className="visual-card">
            <div className="visual-header">
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="window-title">TurboLane Active</span>
            </div>
            
            <div className="visual-body">
              <div className="stream-visualization">
                <div className="stream-label">
                  <span>Active Streams</span>
                  <span className={`stream-value ${isOptimal ? 'optimal' : 'adjusting'}`}>
                    {currentStreams}
                  </span>
                </div>
                
                {/* Stream bars */}
                <div className="stream-bars">
                  {[...Array(8)].map((_, i) => {
                    const barHeight = 30 + Math.random() * 50;
                    const isActive = (i * 2) < currentStreams;
                    return (
                      <div key={i} className="bar-container">
                        <div 
                          className={`bar ${isActive ? 'active' : ''}`}
                          style={{ height: `${barHeight}%` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Range indicator */}
                <div className="range-indicator">
                  <div className="range-track">
                    <div className="optimal-range"></div>
                    <div 
                      className="range-marker"
                      style={{ left: `${(currentStreams / 16) * 100}%` }}
                    >
                      <span className="marker-tooltip">{currentStreams}</span>
                    </div>
                  </div>
                  <div className="range-labels">
                    <span>1</span>
                    <span>8</span>
                    <span>12</span>
                    <span>16</span>
                  </div>
                </div>
                
                <div className="speed-display">
                  <span className="speed-label">Current Speed</span>
                  <span className="speed-value">{currentSpeed} Mbps</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="github-link">
            <a href="https://github.com/Adharsh0/TurboLane-Downloader.git" 
               target="_blank" rel="noopener noreferrer">
              <FaGithub /> star on github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;