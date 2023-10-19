import React from "react";
import styles from "./Intro.module.css"
import Cursor from "../Cursor/Cursor";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introBgOnly}></div>
      <div className={styles.introTextDiv}>
        <p className={styles.introText}>Swatee Vishal- Functional Fitness Studio</p>
        <div className={styles.introBoldTextDiv}>
          <span className={styles.fitnessTextBold}>
            Where Fitness Becomes Your Lifestyle
          </span>
        </div>
      </div>
      <div>
        <Cursor />
      </div>
    </div>
  );
};

export default Intro;
