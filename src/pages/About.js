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
            <div className="about-wrapper">
                <div className="about-statement">
                    <p>I make intimately scaled abstract paintings of inner worlds.</p>
                    <p>Raw canvas is stained with acrylic paint and comes together in simply structured lattice-woven grids and layered window-frame compositions that vibrate with color. Each painting is a portal or reflecting pool exploring the delicate interplay between looking outward and feeling inward.</p>
                    <p>I use sculptural elements to add physical depth and tactility to the work. The draped canvas, exposed seams, and stitching echo the physicality of experience and remembrance. Honoring the rawness of our inside-out existence. 
                    </p>
                    <p>At their core, these works are an invitation to pause and observe – to explore both our external surroundings and internal landscapes. By inviting viewers to observe, reflect, and engage with the work, I aim to create a space that honors the beauty of simply noticing and the richness of being human. </p>
                </div>
                <div className="section-break"></div>
                
                <div className="about-info">
                    <p className="bio-title">Bio</p>
                    <p>Allyson Smith was born in Albany, NY, in 1979. She holds an MFA from Indiana University and a BFA from the Maryland Institute College of Art. Over the past 20 years, her work has been showcased in solo and group exhibitions nationwide. Having devoted time to caring for her child, Allyson has recently recommitted to her studio practice, creating small-scale paintings that highlight the beauty of inner life. Allyson lives and works in Brooklyn, NY.</p>  
                </div>
                <div className="about-contact">
                    <p>Feel free to reach out with any inquiries.</p>
                    <p>allysons{/* Comment */}mithstudio@gmail{/*-- comment --*/}.com</p>
                </div>
            </div>    
            
        </motion.div>    
   )
 }

 export default About