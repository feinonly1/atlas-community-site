import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll pozisyonunu kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // İlk yüklendiğinde kontrol et
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Yukarı scroll fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Sayfa üstüne çık"
      style={{ 
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000 
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 14L12 9L17 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
