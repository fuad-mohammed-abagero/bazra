import React,{useEffect} from 'react'
import Heading from "../common/Heading"
import styled from 'styled-components';
 import "./contact.css"
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './contactinfoitem'
import ContactForm from './ContactForm';

// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps/api';

import Typewriter from "typewriter-effect"

import 'animate.css';
import Reveal from '../reveal';

 

export default function Contactpage() {
  
  
useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
     <div >
     <div className="contac-image">
      <Reveal>
      <span className='head-text'>CONTACT US</span>
      </Reveal>
      </div>
   
    <section className='contactcontainer'>
    <div>
    <Reveal>
     <h1  className='c-head'>
    Contact info & form
     </h1> 
     </Reveal>
     
     </div>
       <div className='contactsection_wraper'>
       <div  className='con_left'>
       <Reveal>
       <a href="https://wa.me/25191233333?" target="_blank"  draggable="false">
  <ContactInfoItem icon={<MdLocalPhone />} text="+25191233333" />
</a>
</Reveal><Reveal>
<a href="mailto:example@gmail.com" target="_blank"  draggable="false">
  <ContactInfoItem icon={<MdEmail />} text="@gmail.com" />
</a>
</Reveal><Reveal>
<a href="https://maps.google.com?q=Friendship+Business+Center,+Airport+Rd,+Addis" target="_blank" draggable="false">
  <ContactInfoItem text="Friendship Business Center, Airport Rd, Addis " />
</a>
</Reveal>
            
       </div>
       <div className='con_right'>
       <ContactForm/>
       </div>
       </div>
    </section>

    <Reveal>
           <div className='map'>
          <iframe width="100%" height="400"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Friendship%20International%20Hotel,%20Bole,%20Addis%20Ababa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population mapping</a></iframe>
             </div>
             </Reveal>
             </div>

         </>    
  )
}
