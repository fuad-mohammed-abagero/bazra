import React from "react";

const Back = ({ name, title, cover }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000", 
    zIndex: 1,
    };

  return (
    <div className='back' style={containerStyle}>
      
      <div className='container' style={contentStyle}>
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Back;
