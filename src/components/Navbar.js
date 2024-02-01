// src/components/Navbar.js
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
    

  return (
    <nav>
      <div className="site-title">Allyson Smith</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.instagram.com/allysonsmithstudio">
        <FaInstagram />
        </a>
      </div>
      < HamburgerMenu />
    </nav>
  );
};

export default Navbar;
