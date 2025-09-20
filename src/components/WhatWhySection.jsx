import React from 'react';

const WhatWhySection = () => {
  return (
    <section id="what-why" className="section">
      <div className="section-inner">
        <h2>What Scootoid.AI Does & Why Choose Us</h2>
        <p className="section-description">
          Scootoid.AI delivers compliant FEA in a fraction of the usual time.
        </p>
        <div className="stats-container">
          <div className="stat">
            <div className="stat-number">90%</div>
            <div className="stat-label">Time Reduction</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Code Compliance</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Analysis Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWhySection;