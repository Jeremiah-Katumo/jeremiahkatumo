import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

const FeaturedMusic = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      // Remove animation class after it finishes (~1s)
      setTimeout(() => setAnimate(false), 1000);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`featured-music-section ${
        animate ? 'animate__animated animate__slideOutLeft' : ''
      }`}
      style={{
        padding: '20px',
        textAlign: 'center',
        minHeight: '100px',
        transition: 'all 0.5s',
        overflow: 'hidden',
      }}
    >
      <h2>Featured Projects</h2>
    </section>
  );
};

export default FeaturedMusic;
