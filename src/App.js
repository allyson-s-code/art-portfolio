import { React} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';


import './App.css';

const App = () => {
  


  return (
    <div className="app">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/work' element={<Work/>} />
         <Route path='/about' element={<About/>} />
       </Routes>
      {/* Add Cloudinary image component here */}
    </div>
  );
};

export default App;

