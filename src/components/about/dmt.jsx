
import React, { useState } from 'react';
import './dmt.css';
import {departmentsData} from'../data/Data'
import Reveal from '../reveal';



const Dmt = () => {
  const [activeDepartment, setActiveDepartment] = useState(departmentsData[0].id);

  const onSelectDepartment = (event) => {
    setActiveDepartment(event.target.value);
  };

  return (
    <div className="a-container">
      <h1 className='d-head'>Departments</h1>
      <Reveal>
      <div className="department-menu">
       
        <select value={activeDepartment} onChange={onSelectDepartment}>
          {departmentsData.map(department => (
            <option key={department.id} value={department.id}>
              {department.title}
            </option>
          ))}
        </select>
       
      </div>
      </Reveal>
      {departmentsData.map(department => (
        <section key={department.id} className={`department-info ${activeDepartment === department.id ? 'active' : ''}`}>
          <h2>{department.title}</h2>
          <div className="d-content">
          
            <img src={department.image} alt={`${department.title} Image`} draggable="false" />
            
            <div className="d-left">
            <Reveal>
              <div className="d-disc">w
              
                <p>{department.description}</p>
              </div>
              </Reveal>
              <Reveal>
              <div className='d-list'>
                <h1>our services</h1>
                <ul>
                  {department.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Dmt;