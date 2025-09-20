import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import WhatWhySection from './components/WhatWhySection';
import WorkflowSection from './components/WorkflowSection';
import UseCasesSection from './components/UseCasesSection';
import ComparisonSection from './components/ComparisonSection';
import AudiencesSection from './components/AudiencesSection';
import SecuritySection from './components/SecuritySection';
import TutorialSection from './components/TutorialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="banner-content"></div>
      </div>
      
      <Header />
      <Hero />
      <WhySection />
      <WhatWhySection />
      <WorkflowSection />
      <UseCasesSection />
      <ComparisonSection />
      <AudiencesSection />
      <SecuritySection />
      <TutorialSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;