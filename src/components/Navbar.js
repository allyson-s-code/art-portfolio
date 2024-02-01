// src/components/Navbar.js
import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <nav>
      <div className="name">Allyson Smith</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.instagram.com/allysonsmithstudio">
          <img src="path/to/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
      < HamburgerMenu />
    </nav>
  );
};

export default Navbar;
