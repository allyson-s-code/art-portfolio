import React from 'react';
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
         <AdvancedImage cldImg={myImage} className="image hero-image"/>
     </div>
   )
 }

 export default Home