import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:ai@scootoid.com" className="email-link">ai@scootoid.com</a>
          </p>
        </div>
        <div className="copyright">
          &copy; <span>{currentYear}</span> Scootoid.AI - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;