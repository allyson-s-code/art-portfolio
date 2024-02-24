import React  from 'react'
import Gallery from '../components/Gallery';
import {motion} from "framer-motion"


 const Work = () => {
    
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
         <Gallery />
     </motion.div>
   )
 }

 export default Work

 