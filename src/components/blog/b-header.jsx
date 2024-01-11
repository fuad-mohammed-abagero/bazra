import React from "react";
import Reveal from "../reveal";
import "./b-header.css";

export default function Headerb() {
  return (
    <div className="b-header">
       
      <div className="headerTitles">
       
         <span className="headerTitleSm">welcome to our blog</span>  
        
      </div>
    
      <img
        className="headerImg"
        // src="../../../blog-2355684.jpg"
        src="../../../../image/LastNews.jpg"
        // src="../../../industry-2630319.jpg"
        alt=""
        draggable="false"
      />
    </div>
  );
}