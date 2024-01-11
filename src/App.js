import React, { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css" ;
import Zendesk, { ZendeskAPI } from "./ZendeskConfig";
import Pages from "./components/page/Pages";
import video from "./vid/v1.mp4"
const ZENDESK_KEY = "5961360e-285b-4f6b-b7b7-d5eb6615d6cf";


function App() {
  useEffect(()=>{
    Aos.init()
    Aos.refresh()
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const videoContainerStyle = {
    
    width:'100%',
     height: '100%', 
    overflow: "hidden",
    backgroundColor:"#2d2e2fef"
  };

  const videoStyle = {
    position: "fixed",
    top: 0,
     left: 0,
     width:'100%', 
     height: '100%', 
     objectFit: 'cover',
    overflow: "hidden",
    displey: "hidden",
    zIndex: -1,
  };

  

  return (
    <div style={videoContainerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      
      <Zendesk defer zendeskKey={ZENDESK_KEY} />
      <Pages />
    </div>
  );
}

 

export default App;
