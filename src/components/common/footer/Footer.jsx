
import React from 'react'
import { footer } from '../../data/Data'
import "./footer.css"
const Footer = () => {
  return (
    <>
    <div className='footers'>
      
      <footer >
      <div className='Hline'>
         <hr/>
      </div>
      {/* <div className='logo'>
                
          <img src='../../../../logo_.png' className=""alt='LOGO' data-aos="zoom-in-right" />
      </div> */}
      <div className='input'>
      <input type='text' placeholder='Email Address' />
      <button className=''>Subscribe</button>
    </div>
      <div className='container' >
          
        {footer.map((item) => (
          <div className="wrap">


          <h2>{item.title}</h2>
              <ul>
                {item.text.map((items) => (
                  <li className="box"  >
                   {items.list} </li>
                ))}
              </ul>
          </div>
        ))}
</div>
      </footer>
      <p className='legal'>© All Right Reserved 2023</p>
    </div>
    </>
  )
}

export default Footer
