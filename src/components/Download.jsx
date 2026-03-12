import React, { useState } from 'react';
import { FaWindows, FaGithub, FaDownload, FaStar, FaCodeBranch } from 'react-icons/fa';
import './Download.css';

const Download = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate download start
    setTimeout(() => {
      setDownloading(false);
      window.location.href = '/Setup_TurboLane.exe';
    }, 1000);
  };

  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content" data-aos="fade-up">
          <h2 className="section-title">Download TurboLane</h2>
          <p className="section-subtitle">
            Get started with the most advanced AI-powered download manager
          </p>

          <div className="download-cards">
            <div className="download-card windows">
              <div className="card-header">
                <FaWindows className="platform-icon" />
                <h3>Windows</h3>
              </div>
              <div className="card-body">
                <p className="version">Version 1.0.1</p>
                <p className="size">Size: 19.5 MB</p>
                <ul className="features-list">
                  <li>✓ Full AI Integration</li>
                  <li>✓ Multi-stream Download</li>
                  <li>✓ Browser Extension</li>
                  <li>✓ Auto Updates</li>
                </ul>
              </div>
              <div className="card-footer">
                <button 
                  className={`btn btn-primary download-btn ${downloading ? 'downloading' : ''}`}
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  {downloading ? (
                    <>
                      <span className="spinner"></span>
                      Preparing...
                    </>
                  ) : (
                    <>
                      <FaDownload /> Download for Windows
                    </>
                  )}
                </button>
                <p className="requirements">
                  Requires Windows 10/11 (64-bit)
                </p>
              </div>
            </div>

            <div className="download-card source">
              <div className="card-header">
                <FaGithub className="platform-icon" />
                <h3>Open Source</h3>
              </div>
              <div className="card-body">
                <div className="github-stats">
                  <div className="stat">
                    <FaStar />
                    <span>1.2k stars</span>
                  </div>
                  <div className="stat">
                    <FaCodeBranch />
                    <span>234 forks</span>
                  </div>
                </div>
                <p className="source-description">
                  TurboLane is completely open source. View the code, contribute, or build from source.
                </p>
              </div>
              <div className="card-footer">
                <a 
                  href="https://github.com/Adharsh0/TurboLane-Downloader.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <h3>Other Platforms</h3>
            <div className="platform-badges">
              <span className="platform-badge">Linux (Coming Soon)</span>
              <span className="platform-badge">macOS (Coming Soon)</span>
              <span className="platform-badge">Android (Planned)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;