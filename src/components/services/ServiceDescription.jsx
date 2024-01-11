import React, { useState, useEffect } from "react";
import { serviceData } from "../data/Data";
import { useLocation, useHistory } from "react-router-dom";
import './ServiceDescription.css';
import Reveal from "../reveal";


const ServiceDescription = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' , block: 'center'  });
        setSelectedService(section);
      }
    }
  }, [search]);

  return (
    <div className='sdbody'>
      
      <h1>Services disription</h1>
      <div className="service-container">
        {serviceData.map((service, index) => (
           <div id={index} key={index} className={`service-item flex ${selectedService === String(index) ? 'selected' : ''}`}>
            <div className="sd-img">
            <Reveal>
            
              <img src={service.imageUrl} alt={`${service.title} Logo`} draggable="false" />
              </Reveal>
            </div>
            <div className="service-content">
              <p>
                <strong className="text-uppercase">{service.title}</strong>
              </p>
              <Reveal>
              <p>{service.description}</p>
              </Reveal>
              <Reveal>
              <a href={service.websiteLink}  rel="noopener noreferrer" className="btn-visit">
              👉 Contact us for more information
              </a>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDescription;
