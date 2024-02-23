import React, { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';


export default function App() {
  const location = useLocation();
  const [navTransitionStage, setNavTransitionStage] = useState('fadeIn');
  const [isOpen, setIsOpen] = useState(false); // Add isOpen state

  console.log(isOpen)
  useEffect(() => {
    // Trigger the transition stage change whenever the location changes
    setNavTransitionStage('fadeOut');
  }, [location]);

  const handleNavTransitionEnd = () => {
    if (navTransitionStage === 'fadeOut' && !isOpen) {
      setNavTransitionStage('fadeIn');
    } else {
      setNavTransitionStage('fadeOut')
    }
  };

  /*const handleNavTransitionEnd = () => {
    // Update the transition stage based on isOpen state
    if (isOpen) {
        setNavTransitionStage('fadeIn');
    } else {
        setNavTransitionStage('fadeOut');
    }
};*/

  // Function to toggle isOpen state
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    handleNavTransitionEnd();
  };

  const closeMenu = () => {
    setIsOpen(false);
    handleNavTransitionEnd();
  };

  return (
    <div className="app">
      <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} closeMenu={closeMenu} transitionStage={navTransitionStage} onTransitionEnd={handleNavTransitionEnd} />
      <Content />
      <Footer />
    </div>
  );
};

function Content() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);


  return (
    <div
      className={`${transitionStage} content`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );

}