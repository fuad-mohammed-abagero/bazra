import React from 'react'
import Heading from '../common/Heading'
import { testimonials } from '../data/Data'
import { FormatQuote } from '@mui/icons-material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'
const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1000, 
      };
  return (
  
      <div className="testimonials t-hero">

        <div className="t-container">
        <Heading title='Client Testimonial' subtitle='Review from Our Customer' data-aos="fade-down-right" />
        <Slider {...settings}>

        {testimonials.map((val, i)=>(
                    
                    
                  <div className="testi">
                    <i>
                        <FormatQuote/>
                    </i>
                        <p>{val.text}</p>
                        <div className="img">
                           <img src={val.cover} alt='' />

                        </div>
                        <h3>{val.name}</h3>
                        <label>{val.prof}</label>
                  
                  </div>

          ))} 
          </Slider>
        </div>
      </div>
  )
}

export default Testimonials
