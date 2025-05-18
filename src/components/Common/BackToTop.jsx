import React, { useState, useEffect } from 'react';
import '../../styles/assets/css/button.css'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='back-to-top-btn'
          aria-label="Back to top"
        >
          <i class="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTop;
