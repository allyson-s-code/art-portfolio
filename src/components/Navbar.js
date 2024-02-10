import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
      

    return (
    
    <nav>
      <Link to="/" className="site-title">Allyson Smith</Link>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/work">Work</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <a href="https://www.instagram.com/allysonsmithstudio" target="_blank" rel="noreferrer" className="insta-icon">
                <FaInstagram />
            </a>
        </li>
      </ul>
      < HamburgerMenu handleClick={handleToggle} isOpen={isOpen}/>
    </nav>
  );
};

export default Navbar;
