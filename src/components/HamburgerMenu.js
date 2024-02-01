import React from 'react';

const HamburgerMenu = (props) => {
  
  return (
    <button className={`hamburger-menu ${props.isOpen ? 'open' : ''}`} onClick={props.handleClick}  aria-label="menu"
    aria-expanded={props.isOpen}>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default HamburgerMenu;
