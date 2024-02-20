import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

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
        }, 300)
    };

    useEffect(() => {
        const handleResize = () => {
            const largerScreen = window.innerWidth > 769;
            setIsDisabled(!largerScreen);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav>
            <Link to="/" className="site-title">Allyson Smith</Link>
            <ul className={`nav-links ${isOpen ? 'fadeIn' : 'fadeOut'} ${isDisabled ? 'disabled' : ''}`}>
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


/*const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth > 769);

    const handleToggle = () => {
        setTimeout(() => {
            setIsDisabled(!isDisabled);
            setIsOpen(!isOpen); // Toggle isOpen after animation starts
        }, 400); // Adjust this timeout to match your animation duration
    };

    const handleCloseMenu = () => {
        setTimeout(() => {
            setIsOpen(false);
            setIsDisabled(true)
             // Close menu after fadeOut
        }, 499); // Adjust this timeout to match your animation duration
    };

  
    //remove disabled class on larger screens so nav bar works
    useEffect(() => {
        window.addEventListener("resize", () => {
            const largerScreen = window.innerWidth > 769;
            if (largerScreen !== isLargerScreen) {
                setIsDisabled(false);
            }
        })
    }, [isLargerScreen])

    

    return (
        <nav>
            <Link to="/" className="site-title">Allyson Smith</Link>
            <ul className={`nav-links ${isOpen ? 'fadeIn' : 'fadeOut'} ${isDisabled ? 'disabled' : ''}`}>
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
*/