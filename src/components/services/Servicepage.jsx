import React ,{useEffect}from "react"
import Services from './Services'
import Products from './Products';
import ServiceDescription from './ServiceDescription'
import "./Services.css";
import videoSource from '../../vid/v1.mp4';
import BServices from './Serviceboerd';
import {motion as m} from 'framer-motion'
import Reveal from "../reveal";
import ImageSlider from "../ImageSlider/ImageSlider";


const Servicepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <><div >
   <BServices/>
      <section className="service-overview-section">
       
      <div className="service-containe">
        <Reveal>
        <h2 className="service-title">Our Services</h2>
        <p className="service-description">
          At bazra motors, we are dedicated to providing cutting-edge solutions tailored to meet the unique needs of the car manifacturing sector. Our comprehensive range of services is designed to empower businesses and drive success in a rapidly evolving landscape.
        </p>
        
        </Reveal>
        <a href="/contact" className="service-button">
        👉 Get in Touch 👈
        </a>
        
      </div>
      <div className="ser-img">
      <Reveal>
        <video autoPlay loop muted controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Reveal>
      </div>
    </section>
        
    <Services/>
    <Products/>
    <ImageSlider/>
    <ServiceDescription/> 
   
    </div> </>
    
  )
}

export default Servicepage