import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import HamburgerMenu from './HamburgerMenu';
import { AnimatePresence, motion } from "framer-motion"

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen); 
    };
    
    return (
        <nav ref={ref} className="mobile-nav">
            <Link to="/" href="/" className="site-title" style={{ cursor: 'pointer' }}>Allyson Smith</Link>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul 
                    className="mobile-nav-links nav-links"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }} 
                     exit={{ opacity: 0 }}  
                     transition={{ duration: 0.2 }}
                >
                    <li>
                        <Link to="/" onClick={handleToggle}>Home</Link>
                    </li>
                    <li>
                        <Link to="/work" onClick={handleToggle}>Work</Link>
                    </li> 
                    <li>
                        <Link to="/about" onClick={handleToggle}>About</Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/allysonsmithstudio" target="_blank" rel="noreferrer" className="insta-icon">
                            <FaInstagram />
                        </a>
                    </li>
                </motion.ul>
                )}
            </AnimatePresence>
            
            <HamburgerMenu handleClick={handleToggle} isOpen={isOpen} />
        </nav>
    );
};

export default MobileNav;