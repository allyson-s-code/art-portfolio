import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default HamburgerMenu;
