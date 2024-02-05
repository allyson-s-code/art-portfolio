import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

 const Home = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'smith-studio'}});
  
    const myImage = cld.image('allysonsmith/art/Purple-ltst-2024'); 
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(800));

   return (
     <div className="main">
         <Navbar />
         <AdvancedImage cldImg={myImage} className="image hero-image"/>
         <Footer />
     </div>
   )
 }

 export default Home