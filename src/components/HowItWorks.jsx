import React, { useRef, useState } from 'react';
import { FaDownload, FaCogs, FaRocket, FaChartLine, FaBullseye, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          How It Works
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Our AI continuously adjusts streams between 1-16, always targeting the optimal 8-12 range
        </p>

        {/* Video Tutorial Section */}
        <div className="video-tutorial" data-aos="fade-up">
          <div className="video-wrapper">
            <div className="video-container">
              <video 
                ref={videoRef}
                className="video-player"
                poster="/images/tutorial-thumbnail.jpg"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/working.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="video-controls">
                <button className="video-control-btn play-pause" onClick={togglePlay}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                
                <div className="video-timeline">
                  <div className="video-progress">
                    <div className="video-progress-filled" style={{width: '0%'}}></div>
                  </div>
                </div>
                
                <button className="video-control-btn mute" onClick={toggleMute}>
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                
                <span className="video-time">0:00 / 2:30</span>
              </div>
            </div>
            
            <div className="video-info">
              <h3>Complete Installation & Usage Guide</h3>
              <p>Watch this quick tutorial to get started with TurboLane in minutes</p>
              <div className="video-meta">
                <span className="video-badge">
                  HD Tutorial
                </span>
                <span className="video-quality">1080p</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Steps Section */}
        <div className="download-steps" data-aos="fade-up">
          <h3>Quick Download Guide</h3>
          <div className="steps-grid">
            <div className="download-step">
              <span className="step-number">1</span>
              <h4>Click Download Button</h4>
              <p>Find the download button on our homepage or download section</p>
            </div>
            <div className="download-step">
              <span className="step-number">2</span>
              <h4>Run Installer</h4>
              <p>Double-click the downloaded .exe file to start installation</p>
            </div>
            <div className="download-step">
              <span className="step-number">3</span>
              <h4>Follow Setup Wizard</h4>
              <p>Click "Next" through the simple installation process</p>
            </div>
            <div className="download-step">
              <span className="step-number">4</span>
              <h4>Launch & Enjoy</h4>
              <p>Open TurboLane and start downloading at maximum speed</p>
            </div>
          </div>
        </div>

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