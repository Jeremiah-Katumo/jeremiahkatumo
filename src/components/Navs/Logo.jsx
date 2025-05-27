import React from 'react';
import { Navbar } from 'react-bootstrap';
import "../../styles/assets/css/topbar.css";

const Logo = () => {
  return (
    
      <Navbar.Brand className="brand-name" href="/">
        <img src={brand} alt="Logo" className="brand-logo" />
      </Navbar.Brand>
  
  );
};

export default Logo;
