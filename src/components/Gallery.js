/*import { React, useEffect, useRef } from 'react';*/
import React from 'react';
import {Cloudinary} from "@cloudinary/url-gen";

const Gallery = () => {
   /*const containerRef = useRef(null);

    useEffect(() => {
        if (window && containerRef.current) {
          window.cloudinary.galleryWidget({
            container: '#gallery',
            cloudName: 'smith-studio',
            mediaAssets: [
                { tag: '2024'}
            ],
          })
          .render();
        }
      }, []); */
      

      const myGallery = cloudinary.galleryWidget({ 
        container: "#gallery", 
        cloudName: "smith-studio", 
        mediaAssets: [{ tag: "2024" }]    // by default mediaType: "image"
      });

      myGallery.render();

      return <div id="gallery" style={{ width: '100%'}}></div>
    

}

export default Gallery;