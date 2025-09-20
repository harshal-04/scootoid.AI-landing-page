import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveNavLink();
    };

    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    updateActiveNavLink();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = (targetId === '#how') 
      ? document.getElementById('workflow-visualization') 
      : document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, null, targetId);
    }
  };

  const isActive = (href) => {
    if (href === '#how' && activeSection === 'workflow-visualization') {
      return true;
    }
    return href === `#${activeSection}`;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="brand">
          <img className="logo" src="logo.png" alt="Scootoid.AI Logo" />
          Scootoid<span className="accent">.AI</span>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a 
            href="#why" 
            className={isActive('#why') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '#why')}
          >
            Why
          </a>
          <a 
            href="#how" 
            className={isActive('#how') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '#how')}
          >
            How It Works
          </a>
          <a 
            href="#use-cases" 
            className={isActive('#use-cases') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '#use-cases')}
          >
            Use Cases
          </a>
          <a 
            href="#tutorial" 
            className={isActive('#tutorial') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '#tutorial')}
          >
            Tutorial
          </a>
          <a 
            href="https://scootoid-ai.web.app/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="access-link"
          >
            Get Started
          </a>
        </nav>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;