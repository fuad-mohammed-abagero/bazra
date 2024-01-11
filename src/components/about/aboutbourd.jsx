import React from 'react'
import { useHistory } from 'react-router-dom';
 import "./aboutbourd.css";
import Reveal from '../reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

 

const Aboutbourd = () => {
    const history = useHistory();
 
    const handleContactButtonClick = () => {
      // Redirect to the "/contact" page
      history.push('/contact');
    };
  
    return (
      <div className="about-page">
        <div className="about-section">
          <Reveal>
         <div className="b-s">
          <h1 className="her-title">About us</h1>
          <p className="her-subtitle">Discover what we are and what we stand for.</p>
          <p className="about-text">
          bazra motors, are a Business, Financial and Transport Services, Import-Export,
           Motors Engineering, Manufacturing and Trading company that brings world class practice 
           standards to Africa through the use of local talent and via collaboration with international partners  
          
          </p>
          
          <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button>
          </div>
          </Reveal>
          
        </div>
        <div className="aboutimg-section">
        
          {/* <img
            src="../../../log_.png"  
            alt="S"
            draggable="false"
            className="about-image"
          />
          */}
          
        </div>
      </div>
    );
  };

export default Aboutbourd