import React from 'react';
import { FaDownload, FaCogs, FaRocket, FaChartLine, FaBullseye } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaDownload />,
      title: '1. Install TurboLane',
      description: 'Download and install the application on your Windows PC.'
    },
    {
      icon: <FaCogs />,
      title: '2. Add Your Download',
      description: 'Paste any URL and watch as AI analyzes and adapts to your network conditions.'
    },
    {
      icon: <FaBullseye />,
      title: '3. Optimal Range Targeting',
      description: 'AI automatically adjusts streams to stay in the optimal 8-12 range for maximum performance.'
    },
    {
      icon: <FaChartLine />,
      title: '4. Continuous Optimization',
      description: 'Streams adapt from 1-16 based on network conditions, always targeting the sweet spot.'
    },
    {
      icon: <FaRocket />,
      title: '5. Maximum Speed',
      description: 'Experience blazing fast downloads with AI-optimized stream allocation.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          How It Works
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Our AI continuously adjusts streams between 1-16, always targeting the optimal 8-12 range
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              className="step-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>

        <div className="optimal-range-demo" data-aos="zoom-in">
          <h3>AI Stream Optimization in Action</h3>
          <div className="range-visualization">
            <div className="range-track">
              <div className="range-optimal-zone">Optimal Range 8-12</div>
              <div className="stream-indicator" style={{left: '62%'}}>
                <span className="current-streams">10 streams</span>
              </div>
            </div>
            <div className="range-markers">
              <span>1</span>
              <span>4</span>
              <span>8</span>
              <span>12</span>
              <span>16</span>
            </div>
          </div>
          <p className="range-description">
            AI continuously monitors network conditions and adjusts streams to maintain the optimal 8-12 range for the best balance of speed and stability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;