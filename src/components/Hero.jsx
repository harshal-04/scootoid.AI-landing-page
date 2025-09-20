import React from 'react';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-left">
          <h1>Automated FEA. Code-Compliant Reports. <span className="highlight">90% Faster.</span></h1>
          <p>Upload your PV Elite input PDF — get a validated, code-compliant FEA report in hours, not weeks.</p>
          <a href="https://scootoid-ai.web.app/login" target="_blank" rel="noopener noreferrer" className="btn big">
            <i className="fas fa-upload"></i> Upload PV Elite PDF
          </a>
          
          <div className="badges-row">
            <span className="badge"><i className="fas fa-ban"></i> No Subscription</span>
            <span className="badge"><i className="fas fa-desktop"></i> No Software</span>
            <span className="badge"><i className="fas fa-server"></i> No Infra Purchase</span>
            <span className="badge"><i className="fas fa-credit-card"></i> Pay-Per-Report</span>
          </div>
          
          <ul className="features">
            <li>ASME compliance logic embedded.</li>
            <li>Enterprise-grade security for your data</li>
          </ul>
        </div>
        <div className="hero-right">
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="AI Engineering Analysis" 
              className="hero-image" 
            />
            <div className="hero-image-overlay">
              <div className="overlay-content">
                <i className="fas fa-play-circle"></i>
                <p>See how it works</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;