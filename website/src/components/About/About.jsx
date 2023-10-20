import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";

const About = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setPlayAnimation(true);
    }
  };
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutChild}>
        <div ref={componentRef} className={styles.aboutBgDiv}></div>
        {playAnimation && (
          <div className={styles.aboutMainDiv}>
            <p className={styles.aboutHeader}>About Swatee Wellness</p>
            <p className={styles.aboutText}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
