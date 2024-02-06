import React from 'react';
import data from '../Data.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      console.log(data);
      return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="slide" key={d.id}>
                        <div className="img-wrapper">
                            <img src={d.url} alt={d.description} className="img" />
                        </div>
                        <div className="info-wrapper">
                            <p className="title">{d.title}</p>
                            <p>{d.medium}</p>
                            <p>{d.dimensions}</p>
                            <p>{d.date}</p>
                        </div>
                </div>
                ))}
            
            </Slider>
        </div>
       
      )
}

export default Gallery;