import React from 'react';

const NavLinks = () => {
  const links = ['Home', 'About', 'Resume', 'Services', 'Projects', 'Blog', 'Contact'];

  return (
    <ul className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
