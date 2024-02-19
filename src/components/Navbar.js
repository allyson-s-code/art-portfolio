import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



/*const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    
      //when links are clicked I want to remove show class on nav because otherwise the menu doesn't close if link to same page is clicked
    /*const links = document.querySelectorAll(".nav-links a")
    
    links.forEach(l => {
        l.addEventListener('click', () => {
            navBar.classList.remove('fadeIn');
            setIsOpen(false);
            navBar.classList.add('fadeOut');
            setTimeout(() => {
                navBar.classList.remove('show');
            }, 1000);
        })
    })*/

    /*const navBar = document.querySelector(".nav-links")

    const handleOpenMenu = () => {
        setIsOpen(true); 
        navBar.classList.add('fadeIn');
        setTimeout(() => {
            navBar.classList.add('show');
        }, 500); // this is to compensate for display transition happening immediately
    }
 
    const handleCloseMenu = () => {
        setIsOpen(false); 
        // Trigger the fade-out effect before removing the "show" class
        navBar.classList.remove('fadeIn');
        navBar.classList.add('fadeOut');
        setTimeout(() => {
            navBar.classList.remove('show');
        }, 500); // this is to compensate for display transition happening immediately
    };


    const handleToggle = () => {
        setIsOpen(!isOpen);
        return isOpen ? handleOpenMenu : handleCloseMenu;
      };

    return (
    
    <nav>
      <Link to="/" className="site-title">Allyson Smith</Link>
      <ul className="nav-links">
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
            <a href="https://www.instagram.com/allysonsmithstudio" target="_blank" rel="noreferrer" className="insta-icon" onClick={handleCloseMenu}>
                <FaInstagram />
            </a>
        </li>
      </ul>
      < HamburgerMenu handleClick={handleToggle} isOpen={isOpen}/>
    </nav>
  );
};
*/

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
            setIsOpen(!isOpen); // Toggle isOpen after animation starts
            setIsAnimating(false); // Stop animation
        }, 400); // Adjust this timeout to match your animation duration
    };

    const handleCloseMenu = () => {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
            setIsAnimating(false);
            setIsOpen(false); // Close menu after animation starts
        }, 499); // Adjust this timeout to match your animation duration
    };

    return (
        <nav>
            <Link to="/" className="site-title">Allyson Smith</Link>
            <ul className={`nav-links ${isOpen ? 'fadeIn' : 'fadeOut'}`}>
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
