import React  from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

 const Work = () => {
    
   return (
    <div className="main">
         <Navbar />
         <Gallery />
         <Footer />
     </div>
   )
 }

 export default Work

 export async function getStaticProps() {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());
    console.log('results', results)
    return {
        props: {

        }
    }
 }