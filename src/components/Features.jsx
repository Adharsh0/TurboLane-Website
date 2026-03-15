import React from 'react';
import { FaRocket, FaRobot, FaNetworkWired, FaChartLine, FaShieldAlt, FaBullseye, FaArrowRight } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast',
      description: 'Multi-stream downloading that automatically optimizes based on your network conditions.',
      gradient: 'from-[#0078d4] to-[#0095ff]'
    },
    {
      icon: <FaRobot />,
      title: 'AI-Powered',
      description: 'Reinforcement learning engine that continuously adapts to your network in real-time.',
      gradient: 'from-[#16c79a] to-[#1de0b0]'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Dynamic Streaming',
      description: 'Intelligently adjusts streams from 1-16 based on real-time performance metrics.',
      gradient: 'from-[#7b68ee] to-[#9d8af0]'
    },
    {
      icon: <FaBullseye />,
      title: 'Optimal Range 8-12',
      description: 'AI targets the sweet spot of 8-12 streams for perfect speed-stability balance.',
      gradient: 'from-[#f97316] to-[#fb923c]'
    },
    {
      icon: <FaChartLine />,
      title: 'Real-time Analytics',
      description: 'Monitor download speed, adaptive stream changes, and AI decisions live.',
      gradient: 'from-[#e11d48] to-[#fb7185]'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Reliable',
      description: 'Resume interrupted downloads and handle network fluctuations intelligently.',
      gradient: 'from-[#059669] to-[#10b981]'
    }
  ];

  return (
    <section id="features" className="features">
      {/* Background decoration */}
      <div className="features-bg">
        <div className="features-bg-gradient"></div>
        <div className="features-bg-pattern"></div>
      </div>

      <div className="features-container">
        {/* Header */}
        <div className="features-header" data-aos="fade-up">
          <div className="features-badge">
            <span className="badge-dot"></span>
            <span>Why TurboLane</span>
          </div>
          <h2 className="features-title">
            Built for <span className="gradient-text">Speed</span>
          </h2>
          <p className="features-subtitle">
            Experience truly adaptive downloading with our AI that continuously learns and optimizes your transfers
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-card-inner">
                <div className={`feature-icon-wrapper ${feature.gradient}`}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="feature-hover-effect">
                  <span className="feature-link">
                    Learn more <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="features-stats" data-aos="fade-up">
          <div className="stat-item">
            <span className="stat-value">10x</span>
            <span className="stat-label">Faster Downloads</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">24/7</span>
            <span className="stat-label">AI Learning</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">1-16</span>
            <span className="stat-label">Adaptive Streams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;