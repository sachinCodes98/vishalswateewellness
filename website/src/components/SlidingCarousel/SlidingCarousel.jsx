import React, { useState, useEffect } from 'react';
import './SlidingCarousel.module.css'; // Import your CSS Module
import styles from './SlidingCarousel.module.css';

import image1 from '../../gallery/sliding01.png'; // Adjust the paths to your image files
import image2 from '../../gallery/sliding02.png';
import image3 from '../../gallery/sliding03.png';
import image4 from '../../gallery/sliding04.png';
import image5 from '../../gallery/sliding05.png';

const images = [image1, image2, image3, image4, image5]; // Add more images as needed

export const SlidingCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 2000); // Change image every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={styles['sliding-carousel']}>
        <div className={styles['carousel-container']}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles['carousel-item']} ${
                index === currentImage ? styles.active : ''
              }`}
            >
              <img src={image} alt={`imgs ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
