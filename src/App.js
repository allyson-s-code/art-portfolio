import { React} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  
const location = useLocation();

  return (
    <div className="app">
      <Navbar />

      <Routes location={location} key={location.path}>
         <Route path='/' element={<Home/>} />
         <Route path='/work' element={<Work/>} />
         <Route path='/about' element={<About/>} />
       </Routes>
      
       <Footer />
    </div>

  );
};

export default App;

