import React, { useState, useEffect } from 'react';
import styles from "./Classes.module.css";
import Button1 from "../Button1/Button1";

const Classes = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // When the component mounts, set the state to trigger the animation.
    setShouldAnimate(true);
  }, []);

  return (
    <div className={styles.classesContainer}>
      <div className={styles.classesMain}>
        <p className={styles.classesTitle}>Our Classes</p>
        <div className={styles.batchesDiv}>
          <div className={`${styles.batchesChildren} ${shouldAnimate ? styles.animated : ''}`}>
            <span>Swatee HIIT</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"17%"}
              color1={"aliceblue"}
              fontSize={"17px"}
            />
          </div>
          <div className={`${styles.batchesChildren} ${shouldAnimate ? styles.animated : ''}`}>
            <span>Vishal Strength</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"17%"}
              color1={"aliceblue"}
              fontSize={"17px"}
            />
          </div>
          <div className={`${styles.batchesChildren} ${shouldAnimate ? styles.animated : ''}`}>
            <span>Vishal Endurance</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"17%"}
              color1={"aliceblue"}
              fontSize={"17px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
