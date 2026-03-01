import React from 'react';
import { FaRocket, FaRobot, FaNetworkWired, FaChartLine, FaShieldAlt, FaBullseye } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast',
      description: 'Multi-stream downloading with automatic optimization based on your network conditions.'
    },
    {
      icon: <FaRobot />,
      title: 'AI-Powered',
      description: 'Reinforcement learning engine that continuously adapts to your network in real-time.'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Dynamic Streaming',
      description: 'Intelligently adjusts number of streams from 1-16 based on real-time performance.'
    },
    {
      icon: <FaBullseye />,
      title: 'Optimal Range 8-12',
      description: 'AI targets the sweet spot of 8-12 streams for the perfect balance of speed and stability.'
    },
    {
      icon: <FaChartLine />,
      title: 'Real-time Analytics',
      description: 'Monitor download speed, adaptive stream changes, and AI decisions in real-time.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Reliable',
      description: 'Resume interrupted downloads and handle network fluctuations intelligently.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose TurboLane?
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Experience truly adaptive downloading with our AI targeting the optimal 8-12 stream range
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;