import React from 'react';

const AudiencesSection = () => {
  return (
    <section id="audiences" className="section">
      <div className="section-inner">
        <h2>Who Benefits</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-industry"></i>
            </div>
            <h3>OEMs</h3>
            <p>Accelerate bidding and design cycle with rapid, compliant analysis</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h3>EPCs</h3>
            <p>Quick check at concept level faster with automated engineering validation</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3>Consultants</h3>
            <p>Scale your practice without adding overhead or software costs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiencesSection;