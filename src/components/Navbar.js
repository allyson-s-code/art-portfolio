import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [initialRender, setInitialRender] = useState(true);

    //check for screen size and if small screen load nav-links disabled

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (window.innerWidth < 769) {
            setIsDisabled(true);
        }
        console.log("initial render", initialRender)
        // After the first render, set initialRender to false
        setInitialRender(false);
        console.log("initial render set to false")
    }, []); 

    //This is only used by hamburger menu on mobile
    const handleToggle = () => {
        setIsDisabled(!isDisabled);
        setIsOpen(!isOpen); 
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
    //when resizing to smaller screen the mobile menu closes 
    //on larger screens remove disable class on closed mobile nav so desktop links are clickable
    useEffect(() => {
        const handleResize = () => {
            const largerScreen = window.innerWidth > 769;
            if (!isOpen) {
                setIsDisabled(!largerScreen);
            }
            if (!largerScreen) {
                setIsOpen(false);
                setIsDisabled(true);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    
    return (
        <nav>
            <Link to="/" href="/" className="site-title" style={{ cursor: 'pointer' }}>Allyson Smith</Link>
            <ul className={`nav-links ${initialRender ? '' : isOpen ? 'fadeIn' : 'fadeOut'} ${isDisabled ? 'disabled' : ''}`}>
            {initialRender && <span>{console.log("Initial render yahoo")}</span>}
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