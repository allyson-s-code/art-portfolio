/*import { React, useEffect, useRef } from 'react';*/
import React from 'react';
/*import {Cloudinary} from "@cloudinary/url-gen";*/

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
      }, []); 
    */
    const myGallery = cloudinary.galleryWidget({
        "container": "#gallery",
        "cloudName": "smith-studio",
        "mediaAssets": [{
            "tag": "new-work",
            "mediaType": "image"
        }],
        "aspectRatio": "3:4",
        "zoomProps": {
            "level": 1
        },
        "carouselStyle": "none"
     });
    myGallery.render();
      
      return <div id="gallery" style={{ width: '100%'}}></div>
    
     
}

export default Gallery;