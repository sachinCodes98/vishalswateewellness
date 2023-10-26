import React, { useState, useEffect } from 'react';
import './SlidingCarousel.module.css'; // Import your CSS Module
import styles from './SlidingCarousel.module.css';

import image1 from '../../gallery/sliding01.png'; // Adjust the paths to your image files
import image2 from '../../gallery/sliding02.png';
import image3 from '../../gallery/sliding03.png';
import image4 from '../../gallery/sliding04.png';
import image5 from '../../gallery/sliding05.png';

const text1 = "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com";
const text2 = "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com";
const text3 = "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com";
const text4 = "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com";
const text5 = "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com";


const items = [{img:image1, text:text1},{img:image2, text:text2},{img:image3, text:text3},{img:image4, text:text4},{img:image5, text:text5}]; // Add more images as needed

export const SlidingCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % items.length);
      }, 2000); // Change image every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className={styles['sliding-carousel']}>
        <div className={styles['carousel-container']}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles['carousel-item']} ${
                index === currentImage ? styles.active : ''
              }`}
            >
              <img src={item.img} alt={`imgs ${index + 1}`} />
              <div className={styles.overlayPTag}>
              <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
