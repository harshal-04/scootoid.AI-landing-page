import React from 'react';

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="section">
      <div className="section-inner">
        <h2>Use Cases</h2>
        <div className="cards-container">
          <div className="card featured">
            <img 
              src="https://via.placeholder.com/600x200.png?text=New+Image+Coming+Soon" 
              alt="Bellow Analysis" 
              className="card-image" 
            />

            <div className="card-content">
              <h3>Single Convolute Bellow Analysis</h3>

              <div className="use-case-step">
                <div className="step-title">Step 1</div>
                <div className="step-description">
                  Spring rate calculations as per TEMA
                </div>
              </div>

              <div className="use-case-step">
                <div className="step-title">Step 2</div>
                <div className="step-description">
                  Detailed FE analysis, code validation, and report
                </div>
                <div className="step-subtext">
                  Supports corroded or uncorroded geometries, including upset conditions
                </div>
              </div>

              <div className="card-button">
                <a href="https://scootoid-ai.web.app/login" target="_blank" rel="noopener noreferrer" className="btn">
                  Start Bellow Analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;