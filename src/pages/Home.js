import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {motion} from "framer-motion";

 const Home = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'smith-studio'}});
  
    const myImage = cld.image('allysonsmith/art/Purple-ltst-2024'); 
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(800));

   return (
     <motion.div 
        className="main"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition= {{
            ease: "easeInOut",
            duration: 1
        }}
    >
         <AdvancedImage cldImg={myImage} className="image hero-image"/>
     </motion.div>
   )
 }

 export default Home