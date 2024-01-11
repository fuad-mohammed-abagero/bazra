import React from 'react';
import { useHistory } from 'react-router-dom';
import Reveal from '../reveal';
 import "./Serviceboerd.css";
 
 const BServices = () => {
  const history = useHistory();
 
  const handleContactButtonClick = () => {
    history.push('/contact');
  };

  return (
    <div className="service-page">
     
      <div className="service-section">
      <Reveal>
        <h1 className="hero-title">Services</h1>
        
        <p className="hero-subtitle">Discover what sets us apart in delivering top-notch solutions.</p>
        <p className="service-text">
                   Connect your technology needs for your best business with technology our service and technology service. Practiced and implemented using technology and modern car auto rebuild the.
          Welcome to our professional service page. We provide top-notch services to meet your needs.
        </p>
        
        <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button>
        </Reveal>
      </div>
      
      <div className="staff-section">
      <Reveal>
        <img
          src="../../../service-bo.png"
          alt="service"
          draggable="false"
          className="staff-image"
        />
        </Reveal>
      </div>
    </div>
  );
};

export default BServices;