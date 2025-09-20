import React from 'react';

const TutorialSection = () => {
  return (
    <section id="tutorial" style={{ padding: '40px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '60px', marginBottom: '20px', color: 'var(--primary)' }}>Tutorial</h2>

        <div style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0, 
          overflow: 'hidden', 
          maxWidth: '100%', 
          borderRadius: '10px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)' 
        }}>
          <iframe 
            src="https://www.youtube.com/embed/wAtZsLCLSiY?si=ButaymxSpX40wSZa" 
            title="YouTube video player"
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              border: 0 
            }} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p style={{ 
          marginTop: '15px', 
          fontSize: '16px', 
          color: '#555', 
          lineHeight: 1.5 
        }}>
          Watch our tutorial to learn how to use <b>Scootoid.AI</b> for your engineering analysis needs.
        </p>
      </div>
    </section>
  );
};

export default TutorialSection;