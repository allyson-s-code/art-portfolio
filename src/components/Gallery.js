import React from 'react';
import data from '../Data.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";*/
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";


function PrevArrow(props){
    const { className, style, onClick } = props;
    return(
      <button onClick={onClick} className={`arrow ${className}`}  >
        <SlArrowLeft className="arrows" />
      </button>
    )
    }

function NextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <button onClick={onClick} className={`arrow ${className}`} >
        <SlArrowRight className="arrows" />
      </button>
    )
  }

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: 'arrows',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      
      
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