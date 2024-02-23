import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from './HamburgerMenu';

const Navbar = ({ transitionStage, isOpen, toggleIsOpen, closeMenu }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    // Check for screen size and if small screen load nav-links disabled
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (window.innerWidth < 769 && !isOpen) {
            setIsDisabled(true);
        }

        if (window.innerWidth < 769 && isOpen) {
            setIsDisabled(false);
        }
        
        // If it's the initial load and menu is closed, set opacity to 0
        if (initialLoad) {
            setInitialLoad(false); // Update initial load status
        }
    }, []);

    //handle resize to larger screen and allow nav to be clickable
    useEffect(() => {
        const handleResize = () => {
            const largerScreen = window.innerWidth > 769;
            if (!isOpen) {
                setIsDisabled(!largerScreen);
            }
        };
        console.log("big screen time")
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);
    
    // This is only used by hamburger menu on mobile
    const handleToggle = () => {
        setIsDisabled(!isDisabled);
     // Toggle isOpen after animation starts
        toggleIsOpen();
    };

    const handleCloseMenu = () => {
           //only on smaller screens using mobile menu
            if (window.innerWidth <= 769) {
                closeMenu();
                setIsDisabled(true);
            } // Close menu after fadeOut and disable links only on mobile nav
    };


    return (
        <nav>
            <Link to="/" className="site-title">Allyson Smith</Link>
            <ul className={`nav-links ${initialLoad ? '' : transitionStage} ${isDisabled ? 'disabled' : ''}`} >
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