import React from 'react';
import { motion } from 'framer-motion';


 const About = () => {
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
            <div className="about-info">
                <p>Allyson Smith lives and works in Brooklyn, NY.</p>
                <p>Feel free to reach out with any inquiries.</p>
                <p>allysons{/* Comment */}mithstudio@gmail{/*-- comment --*/}.com</p>
            </div>
        </motion.div>    
   )
 }

 export default About