import React from 'react';

const WhySection = () => {
  return (
    <section id="why" className="section">
      <div className="section-inner">
        <h2>Why is it Difficult to Automate?</h2>
        <h3>FE analysis in pressure vessel equipment design</h3>

        <p>
          In pressure vessel design, <strong><em>codes are constantly evolving</em></strong>, so the rules never stay the same.
          At the same time, <strong><em>each vessel is unique</em></strong>, with geometries that leave no room for ready-made templates.
        </p>

        <p>
          FEA itself is needed only for <strong><em>exceptional cases where formulas don't apply</em></strong>, making it difficult to standardize.
          Even then, <u><strong>stress rules demand engineering judgment</strong></u> — software alone cannot decide what is primary, secondary, or peak stress.
        </p>

        <p>
          On top of this, vessels are subjected to <strong><em>complex load interactions</em></strong> — pressure, thermal, seismic, fatigue — all behaving in nonlinear ways.
          And with the <strong><em>high safety liability in case of failure</em></strong>, every analysis must ensure strict code compliance and certified review.
        </p>

        <p>
          Finally, <strong><em>data is scattered across multiple sources</em></strong> — geometry, materials, loads — and pulling it all into a single consistent analysis document is slow and error-prone.
        </p>
      </div>
    </section>
  );
};

export default WhySection;