import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

 const About = () => {
   return (
     <div className="main">
         <Navbar />
         <div className="about-info">
            <p>Allyson Smith lives and works in Brooklyn, NY.</p>
            <p>Feel free to reach out with any inquiries.</p>
            <p>allysons{/* Comment */}mithstudio@gmail{/*-- comment --*/}.com</p>
        </div>
        <Footer />
     </div>
   )
 }

 export default About