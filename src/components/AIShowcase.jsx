import React, { useState, useEffect } from 'react';
import { FaBrain, FaChartBar, FaCogs, FaMagic, FaCheckCircle } from 'react-icons/fa';
import './AIShowcase.css';

const AIShowcase = () => {
  const [currentStreams, setCurrentStreams] = useState(8);
  const [throughput, setThroughput] = useState(24.6);
  const [qTableSize, setQTableSize] = useState(1247);
  const [explorationRate, setExplorationRate] = useState(0.15);
  const [optimalRange, setOptimalRange] = useState({ min: 8, max: 12 });

  // Simulate AI adapting streams based on network conditions
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate stream count that stays mostly in optimal range 8-12
      // but occasionally goes outside to show adaptation
      let newStreams;
      const rand = Math.random();
      
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
      
      const newThroughput = (Math.random() * 30 + 15).toFixed(1); // 15-45 Mbps
      const newQSize = Math.floor(Math.random() * 500) + 1000; // 1000-1500 states
      const newEpsilon = (Math.random() * 0.2 + 0.05).toFixed(2); // 0.05-0.25
      
      setCurrentStreams(newStreams);
      setThroughput(newThroughput);
      setQTableSize(newQSize);
      setExplorationRate(newEpsilon);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Determine if current streams are in optimal range
  const isOptimal = currentStreams >= 8 && currentStreams <= 12;

  const aiFeatures = [
    {
      icon: <FaBrain />,
      title: 'Reinforcement Learning',
      description: 'Our AI learns from each download, continuously improving performance.'
    },
    {
      icon: <FaChartBar />,
      title: 'Adaptive Streaming',
      description: 'Dynamically adjusts connection count between 1-16 streams based on network conditions.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Optimal Range 8-12',
      description: 'AI targets the sweet spot of 8-12 streams for the best balance of speed and stability.'
    },
    {
      icon: <FaCogs />,
      title: 'Q-Learning Algorithm',
      description: 'Advanced Q-learning that optimizes stream allocation in real-time.'
    },
    {
      icon: <FaMagic />,
      title: 'Self-Optimizing',
      description: 'No manual configuration needed - AI adapts to your network.'
    }
  ];

  return (
    <section id="ai-showcase" className="ai-showcase">
      <div className="container">
        <div className="ai-content">
          <div className="ai-text" data-aos="fade-right">
            <h2 className="section-title">Powered by Adaptive AI</h2>
            <p className="section-subtitle">
              TurboLane uses Reinforcement Learning to automatically optimize your downloads. 
              The AI targets the <strong>optimal range of 8-12 streams</strong> for maximum performance.
            </p>

            <div className="ai-stats">
              <div className="ai-stat">
                <span className="ai-stat-number">10k+</span>
                <span className="ai-stat-label">AI Decisions Made</span>
              </div>
              <div className="ai-stat">
                <span className="ai-stat-number">95%</span>
                <span className="ai-stat-label">Optimization Rate</span>
              </div>
              <div className="ai-stat">
                <span className="ai-stat-number">50ms</span>
                <span className="ai-stat-label">Response Time</span>
              </div>
            </div>

            <div className="range-indicator">
              <span className="range-label">Optimal Stream Range:</span>
              <div className="range-bars">
                <div className="range-bar low">1-7</div>
                <div className="range-bar optimal">8-12</div>
                <div className="range-bar high">13-16</div>
              </div>
            </div>

            <div className="ai-features">
              {aiFeatures.map((feature, index) => (
                <div className="ai-feature-item" key={index}>
                  <div className="ai-feature-icon">{feature.icon}</div>
                  <div className="ai-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ai-visual" data-aos="fade-left">
            <div className="ai-card">
              <div className="ai-card-header">
                <span className="ai-badge">RL ACTIVE</span>
                <span className="ai-status">Learning in real-time</span>
              </div>
              <div className="ai-card-body">
                <div className="ai-metric">
                  <span>Q-Table Size</span>
                  <span className="metric-value">{qTableSize.toLocaleString()} states</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${(qTableSize/2000)*100}%`}}></div>
                </div>
                
                {/* Dynamic stream visualization with optimal range highlight */}
                <div className="stream-visualization">
                  <div className="stream-header">
                    <span className="stream-label">Current Streams:</span>
                    <span className={`stream-value ${isOptimal ? 'optimal' : ''}`}>
                      {currentStreams} streams
                      {isOptimal && <span className="optimal-badge">Optimal</span>}
                    </span>
                  </div>
                  
                  <div className="stream-range-container">
                    <div className="stream-range-track">
                      <div className="range-marker optimal-range" style={{left: '43%', right: '25%'}}>
                        <span className="marker-label">Optimal 8-12</span>
                      </div>
                      <div 
                        className="stream-position" 
                        style={{left: `${(currentStreams / 16) * 100}%`}}
                      >
                        <div className="position-dot"></div>
                      </div>
                    </div>
                    <div className="range-labels">
                      <span>1</span>
                      <span>4</span>
                      <span>8</span>
                      <span>12</span>
                      <span>16</span>
                    </div>
                  </div>

                  <div className="stream-bars">
                    {[...Array(16)].map((_, i) => {
                      const streamNumber = i + 1;
                      const isActive = streamNumber <= currentStreams;
                      const isInOptimalRange = streamNumber >= 8 && streamNumber <= 12;
                      
                      return (
                        <div 
                          key={i} 
                          className={`stream-bar ${isActive ? 'active' : 'inactive'} 
                            ${isInOptimalRange ? 'optimal-range' : ''}`}
                          style={{ 
                            height: isActive ? `${60 + Math.random() * 40}%` : '20%',
                            opacity: isActive ? 1 : 0.3
                          }}
                        >
                          {isActive && streamNumber === Math.floor(currentStreams) && (
                            <div className="stream-indicator"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="network-metrics">
                  <div className="metric">
                    <span>Throughput</span>
                    <span className="metric-value">{throughput} Mbps</span>
                  </div>
                  <div className="metric">
                    <span>Latency</span>
                    <span className="metric-value">{Math.floor(Math.random() * 50 + 10)} ms</span>
                  </div>
                  <div className="metric">
                    <span>Stream Efficiency</span>
                    <span className="metric-value">
                      {isOptimal ? '96%' : currentStreams < 8 ? '72%' : '84%'}
                    </span>
                  </div>
                </div>

                <div className="ai-decision">
                  <span className="decision-label">AI Strategy:</span>
                  <span className="decision-value">
                    {currentStreams < 8 ? 'Increasing streams...' : 
                     currentStreams > 12 ? 'Reducing streams...' : 
                     'Optimal range'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;