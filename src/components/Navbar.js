// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="brand">Allyson Smith</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.instagram.com/allysonsmithstudio">
          <img src="path/to/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
