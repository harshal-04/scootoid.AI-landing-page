import React from 'react';

const ComparisonSection = () => {
  return (
    <section id="comparison" className="section">
      <div className="section-inner">
        <h2 className="section-title">The Scootoid.AI Edge</h2>

        <div className="comparison-row">
          <div className="comparison-block traditional">
            <h3>Traditional FEA Workflow</h3>
            <ul>
              <li>Delays due to weeks of coordination</li>
              <li><strong>Repetitive Manual geometry</strong> and load setup</li>
              <li>Reports vary with <strong>inconsistent formatting</strong></li>
              <li><strong>Manual ASME rule application</strong></li>
              <li><strong>Admin overhead</strong> for licenses, infrastructure, and IT</li>
              <li><strong>High upfront licensing</strong> and engineer costs</li>
            </ul>
          </div>

          <div className="comparison-block scootoid">
            <h3>Scootoid.AI</h3>
            <ul>
              <li><span className="highlight">Up to 90% time savings</span> for faster results</li>
              <li><span className="highlight">Built-in ASME compliance</span></li>
              <li><span className="highlight">Standardized PDF reports</span> that are audit-ready</li>
              <li><span className="highlight">End-to-end automation</span> with no manual setup</li>
              <li><span className="highlight">Zero admin work</span> with nothing to install</li>
              <li><span className="highlight">Pay-per-report</span> with predictable pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;