import React from 'react'
import Navbar from '../components/Navbar';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

 const Home = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'smith-studio'}});
  
    const myImage = cld.image('allysonsmith/art/Purple-2024'); 
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(1200));

   return (
     <div className="main">
         <Navbar />
         <AdvancedImage cldImg={myImage} className="image hero-image"/>
     </div>
   )
 }

 export default Home