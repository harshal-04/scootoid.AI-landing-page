import React, { useEffect, useState } from 'react';

const WorkflowSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSteps = 6;
  const stepDuration = 1200;

  const steps = [
    { time: '< 1 min', icon: 'fas fa-cloud-upload-alt', title: 'Upload PDF', description: 'Submit Design Calculations' },
    { time: '2-3 min', icon: 'fas fa-check-double', title: 'AI Enables', description: 'Design Parameter Processing' },
    { time: '15-30 min', icon: 'fas fa-brain', title: 'FE analysis', description: 'AI-powered process' },
    { time: '5-10 min', icon: 'fas fa-certificate', title: 'Post Processing', description: 'AS per code requirements' },
    { time: '3-5 min', icon: 'fas fa-file-contract', title: 'Report Gen', description: 'Automated FE Report' },
    { time: '< 1 min', icon: 'fas fa-download', title: 'Download', description: 'Code Compliant FE Report' }
  ];

  const [counters, setCounters] = useState({
    stat2: 0,
    stat3: 0,
    stat4: 0
  });

  useEffect(() => {
    const startAnimation = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (currentStep >= totalSteps) {
        resetAnimation();
        setTimeout(() => startAnimation(), 800);
        return;
      }

      const interval = setInterval(() => {
        setCurrentStep(prev => {
          const next = prev + 1;
          const percent = (next / totalSteps) * 100;
          setProgress(percent);

          if (next === totalSteps) {
            clearInterval(interval);
            setTimeout(() => {
              animateCounters();
              setTimeout(() => {
                resetAnimation();
                startAnimation();
              }, 1500);
            }, stepDuration);
            setIsAnimating(false);
          }

          return next;
        });
      }, stepDuration);
    };

    const resetAnimation = () => {
      setCurrentStep(0);
      setProgress(0);
      setIsAnimating(false);
      setCounters({ stat2: 0, stat3: 0, stat4: 0 });
    };

    const animateCounters = () => {
      const animateCounter = (key, finalValue, duration) => {
        const increment = finalValue / (duration / 16);
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            clearInterval(timer);
            setCounters(prev => ({ ...prev, [key]: finalValue }));
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(currentValue) }));
          }
        }, 16);
      };

      animateCounter('stat2', 100, 1500);
      animateCounter('stat3', 24, 1500);
      animateCounter('stat4', 0, 1500);
    };

    startAnimation();
  }, [currentStep, isAnimating, totalSteps]);

  return (
    <section id="workflow-visualization" className="section">
      <div id="workflow-section">
        <div className="workflow-header">
          <h2>How It Works</h2>
          <p className="workflow-subtitle">Transform your PV Elite PDF into a compliant FEA report in hours, not weeks</p>
        </div>

        <div className="workflow-container">
          <div className="progress-section">
            <div className="progress-title">Analysis Progress</div>
            <div className="progress-subtitle">Automated workflow processing</div>
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-percentage">{Math.round(progress)}%</div>
          </div>

          <div className="flow-container">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div 
                  className={`workflow-step ${
                    index < currentStep ? 'completed' : 
                    index === currentStep - 1 ? 'active animate' : ''
                  }`}
                  data-step={index + 1}
                >
                  <div className="step-time">{step.time}</div>
                  <div className="step-icon-container">
                    <div className="step-icon-circle"></div>
                    <div className="step-icon">
                      <i className={step.icon}></i>
                    </div>
                  </div>
                  <div className="step-text">
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className={`flow-arrow ${index < currentStep - 1 ? 'animate active' : ''}`}>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="value-proposition">
          <div className="value-title">
            From Weeks to Hours
            <span className="value-highlight"></span>
            Code-Compliant Engineering Reports
          </div>
          
          <div className="value-stats">
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">{counters.stat2}</span>
                <span className="stat-suffix">%</span>
              </div>
              <div className="stat-label">ASME Compliant</div>
              <div className="stat-description">Built-in validation engine</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">{counters.stat3}</span>
                <span className="stat-suffix">/7</span>
              </div>
              <div className="stat-label">Available</div>
              <div className="stat-description">Zero Human Intervention</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-prefix">$</span>
                <span className="stat-number">{counters.stat4}</span>
              </div>
              <div className="stat-label">Setup Cost</div>
              <div className="stat-description">Pay per report only</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;