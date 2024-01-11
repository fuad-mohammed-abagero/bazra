// ImageSlider.jsx

import React, { useState , useEffect} from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    { src: '../../../image/2015_lada_raven_supercar_concept-HD.jpg', name: 'lada', role: 'demicar' },
    { src: '../../../image/vesta3.jpg', name: 'lada', role: 'vesta' },
    { src: '../../../image/main_desktop.webp', name: 'lada', role: 'niva' },
    { src: '../../../image/6867247746a5b4ec0c5ec3994a1dc153.jpg', name: 'lada', role: 'Demicar' },
    { src: '../../../image/gs_dt.webp', name: 'lada', role: 'granta' },
    { src: '../../../image/Lada_Vision014.jpg', name: 'lada', role: '4x4' },
    { src: '../../../image/lada-vesta-sw-cross-2023-2024-1692357645.7809312.jpg', name: 'lada', role: 'vesta' },
    { src: '../../../image/Vesta/vs_main_header_d.webp', name: 'lada', role: 'Vesta' },
    { src: '../../../image/vaz_catalogue_notes-file_-115365-840.jpg', name: 'lada', role: '4x4' },

    { src: '../../../image/Granta/classic_22_672.webp', name: 'lada', role: 'granta' },

  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <section className="is-slider-container">
      <div className="is-slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`is-slider-img ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={image.name} />
            <h1>{image.role}</h1>
            <div className="is-details">
              <h2>{image.name}</h2>
              <p>{image.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
