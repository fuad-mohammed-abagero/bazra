import React ,{useEffect}from "react"
import Heading from "../common/Heading"
import { service } from "../data/Data"
import { Link, useHistory } from "react-router-dom";
import './Services.css'
import {motion as m} from 'framer-motion'
import Reveal from "../reveal";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    const history = useHistory();
  
    const handleClick = (index) => {
      history.push(`/services?section=${index}`);
    };
  
  return (
    <>
      <div 
      
      name='ID1'
      className='services'>
        
        <div className='s-container' name="" >
        <Reveal>
          <Heading title='Services'  />
          </Reveal>
          <div className='content gridser'>

              {service.map((item, index)=>(
           
           
                  <div className='box' data-aos="zoom-in-right">
                    <Reveal>
                    <i data-aos="fade-down-right">{item.icon}</i>
                    <h3 data-aos="flip-down">{item.title}</h3>
                    <p data-aos="flip-down" onClick={() => handleClick(index)}>
                  Service description
                </p>
                </Reveal>
              
                  </div>
                  

                ))}
           </div>


        </div>
        
      </div>
    </>
  )
}

export default Services
