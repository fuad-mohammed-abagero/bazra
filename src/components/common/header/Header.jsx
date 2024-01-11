
import React, { useEffect, useState } from 'react';
import "./header.css"
import { nav } from "../../data/Data"
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faXTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    const [navList, setNavList] = useState(false)
    const [isTransparent, setIsTransparent] = useState(true);
    const location = useLocation();
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          setIsTransparent(false);
        } else {
          setIsTransparent(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const isActive = (path) => location.pathname === path;
    const getLinkStyle = (path) => ({
      color: isActive(path) ? 'var(--primaryColor)' : 'white', 
      
    });
    const closeNavList = () => {
      setNavList(false);
    };
  return (
    
    <header className={isTransparent ? 'transparent' : 'non-transparent'}>
      
      
        <div className="container flexsb">
     
              <div className='logo'>
              <a href="/">
                     <img src="../../../../lo.png" alt='LOGO'  draggable="false" data-aos="zoom-in-right" />
                     </a>
                     
              </div>
              <div className="social-media-icons">
      
      
      
                     
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={ faXTwitter} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      </div>
              <div className={navList ? "small" : "nav"}>
               
                    {nav.map((list, index) => (
                         <Link to={list.path} key={index} data-aos="zoom-in-left" style={getLinkStyle(list.path)}  
                         onClick={closeNavList}  draggable="false"  >
                         {isActive(list.path) && '| '}{list.text}{isActive(list.path) && ' | '}
                       </Link>
                    ))}
                 
              </div>
            

                <div className='toggle'>
                     <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
                </div>
        
      </div>
     </header> 
  )
}

export default Header
