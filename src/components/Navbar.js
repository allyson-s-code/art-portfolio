import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
      

    return (
    
    <nav>
      <div className="site-title">Allyson Smith</div>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.instagram.com/allysonsmithstudio">
        <FaInstagram />
        </a>
      </div>
      < HamburgerMenu handleClick={handleToggle} isOpen={isOpen}/>
    </nav>
  );
};

export default Navbar;
