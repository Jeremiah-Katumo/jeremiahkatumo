import React, { useState, useEffect } from 'react';
import '../../styles/assets/css/mobilenav.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contacts', label: 'Contact' },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on navigation
  const handleNavClick = () => setOpen(false);

  if (!isMobile) return null;

  const dropdownStyles = {
    "backgroundColor": "grey",
    "width": "100%"
  }

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <i className={`bi ${open ? "bi-x" : "bi-list"}`}></i>
      </button>
      {open && (
        <div className="mobile-dropdown-nav" style={dropdownStyles}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/blogs">Blog</a>
          <a href="/contacts">Contact</a>
        </div>
      )}
    </>
  );
};

export default MobileNav;