import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [initialRender, setInitialRender] = useState(true);

    //check for screen size and if small screen load nav-links disabled

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (window.innerWidth < 769 && !isOpen) {
            setIsDisabled(true);
        }
        // After the first render, set initialRender to false
        setInitialRender(false);
    }, [isOpen]); 

    //This is only used by hamburger menu on mobile
    const handleToggle = () => {
        setIsDisabled(!isDisabled);
        setIsOpen(!isOpen); // Toggle isOpen after animation starts
    };

    const handleCloseMenu = () => {
        setTimeout(() => {
            setIsOpen(false);
            if (window.innerWidth <= 769) {
                setIsDisabled(true);
            } // Close menu after fadeOut and disable links only on mobile nav
        }, 400)
    };

    //only disable nav links on small screens when menu is closed
    //on larger screens remove disable class on closed mobile nav so desktop links are clickable
    useEffect(() => {
        const handleResize = () => {
            const largerScreen = window.innerWidth > 769;
            if (!isOpen) {
                setIsDisabled(!largerScreen);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <nav>
            <Link to="/" className="site-title">Allyson Smith</Link>
            <ul className={`nav-links ${initialRender ? '' : isOpen ? 'fadeIn' : 'fadeOut'} ${isDisabled ? 'disabled' : ''}`}>
                <li>
                    <Link to="/" onClick={handleCloseMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/work" onClick={handleCloseMenu}>Work</Link>
                </li> 
                <li>
                    <Link to="/about" onClick={handleCloseMenu}>About</Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/allysonsmithstudio" target="_blank" rel="noreferrer" className="insta-icon">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <HamburgerMenu handleClick={handleToggle} isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;


