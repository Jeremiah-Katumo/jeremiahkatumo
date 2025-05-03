import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';        // Desktop/laptop navbar
import MobileNav from './MobileNav'; // Mobile navbar

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991); // Bootstrap 'lg' breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Change breakpoint if needed
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNav /> : <Navbar />}
    </>
  );
};

export default ResponsiveNavbar;
