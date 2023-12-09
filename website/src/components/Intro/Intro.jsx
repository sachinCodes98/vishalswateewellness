import React from "react";
import styles from "./Intro.module.css";
import Cursor from "../Cursor/Cursor";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introBgOnly}></div>
      <div transition-style="in:circle:hesitate" className={styles.introTextDiv}>
        <h1 className={styles.introText}>
          Vishal's Functional Fitness Studio
        </h1>
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
