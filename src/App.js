import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';
import { AnimatePresence } from 'framer-motion';


export default function App() {
  
  return (
    <div className="app">
      <Navbar />
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