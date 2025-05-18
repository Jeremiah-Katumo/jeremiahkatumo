import { useEffect } from 'react';
import AOS from 'aos';
import '../styles/assets/css/aos.css'; // Import AOS CSS

const AOSInitialiser = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return null; // This component doesn't render anything, so return null
};

export default AOSInitialiser;