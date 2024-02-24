import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';


export default function App() {
  
  return (
    <div className="app">
      <MobileNav />
      <DesktopNav />
      <Content />
      <Footer />
    </div>
  );
};

function Content() {
  const location = useLocation();

  return (

      <AnimatePresence>
        <Routes location={location} kay={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    
  );
}