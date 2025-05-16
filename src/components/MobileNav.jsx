import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "../styles/assets/css/topbar.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // Hide mobile nav on resize above 991px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mobile-nav-wrapper">
      <button
        className="mobile-nav-toggle"
        aria-label="Open navigation"
        onClick={() => setOpen(!open)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {open && (
        <div className="mobile-nav-dropdown">
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={() => setOpen(false)}>Home</Nav.Link>
            <Nav.Link href="/about" onClick={() => setOpen(false)}>About</Nav.Link>
            <Nav.Link href="/resume" onClick={() => setOpen(false)}>Resume</Nav.Link>
            <Nav.Link href="/services" onClick={() => setOpen(false)}>Services</Nav.Link>
            <Nav.Link href="/projects" onClick={() => setOpen(false)}>Projects</Nav.Link>
            <Nav.Link href="/blogs" onClick={() => setOpen(false)}>Blog</Nav.Link>
            <Nav.Link href="/contacts" onClick={() => setOpen(false)}>Contact</Nav.Link>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
