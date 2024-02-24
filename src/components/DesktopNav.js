import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";


const DesktopNav = () => {
    
    return (
        <nav className="desktop-nav">
            <Link to="/" href="/" className="site-title" style={{ cursor: 'pointer' }}>Allyson Smith</Link>
            <ul className="desktop-nav-links nav-links">
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
        </nav>
    );
};

export default DesktopNav;