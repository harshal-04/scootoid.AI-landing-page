import React from 'react';

const SecuritySection = () => {
  return (
    <section id="security" className="section">
      <div className="section-inner">
        <h2>Enterprise Security</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-content">
              <h3>Security & Compliance</h3>
              <ul className="features">
                <li><i className="fas fa-shield-alt"></i> Enterprise-grade security protocols</li>
                <li><i className="fas fa-database"></i> Complete data isolation and encryption</li>
                <li><i className="fas fa-user-lock"></i> Role-based access controls</li>
                <li><i className="fas fa-history"></i> Comprehensive audit trails</li>
                <li><i className="fas fa-file-alt"></i> Compliance-ready logging and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;