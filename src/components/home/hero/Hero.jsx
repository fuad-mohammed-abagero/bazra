import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

   

import React, { useState, useEffect } from 'react';
import './hero.css';
import Reveal from "../../reveal";

const images = [
  '../../../../image/banner_desktop.jpeg',
  '../../../../image/LastNews.jpg',
  '../../../../image/vesta3.jpg',
  '../../../../image/main_desktop.webp',

  '../../../../image/6867247746a5b4ec0c5ec3994a1dc153.jpg',
  '../../../../image/pres-releas.jpg',
  '../../../../image/Lada_Vision014.jpg',
  '../../../../image/Lada-Crossover-Models.jpg',

];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [door, setDoor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoor(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setDoor(false); 
      }, 800);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);
  const scrollToTarget = () => {
    scroller.scrollTo('ID1', {
      smooth: true,
      duration: 500,
    });
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="hero-section">
      <div className="page-turn-container">
        <div className={`page-turn ${door ? 'slide-enter' : ''}`}>
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            draggable="false"
          />
        </div>
      </div>

      
      <div className="slider-content">
     
      
        <div className="slider-text">
        <Reveal>
          <h1>Bazra Motors</h1>
          <p>bazra motors, are a Business, Financial and Transport Services, Import-Export,
           Motors Engineering, Manufacturing and Trading company.</p>
           <Link to="/about">
          <button className="read-more-button">Read More</button>
          </Link>
          
          </Reveal></div>
        
        <div className="slider-buttons">
          <button className="arrow-button" onClick={goToPrevSlide}>&lt;</button>
          <button className="arrow-button" onClick={goToNextSlide}>&gt;</button>
        </div>
      </div>
      <div className="slider-circles">
  {images.map((_, index) => (
    <div
      key={index}
      className={`circle ${index === currentSlide ? 'active' : ''}`}
      onClick={() => goToSlide(index)}
    ></div>
  ))}
</div>
      <div className="scroll-wrapper">
        <a href="#service" onClick={scrollToTarget}>
          <i className="scroll fas fa-chevron-down"></i>
        </a>
      </div>
    </div> 
  );
};


export default Hero;
