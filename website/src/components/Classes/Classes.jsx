import React from "react";
import styles from "./Classes.module.css";
import Button1 from "../Button1/Button1";

const Classes = () => {
  return (
    <div className={styles.classesContainer}>
      <div className={styles.classesMain}>
        <p className={styles.classesTitle}>Our Classes</p>
        <div className={styles.batchesDiv}>
          <div className={styles.batchesChildren}>
            <span>Swatee HIIT</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"20%"}
              color1={"aliceblue"}
              fontSize={"20px"}
            />
          </div>
          <div className={styles.batchesChildren}>
            <span>Vishal Strength</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"20%"}
              color1={"aliceblue"}
              fontSize={"20px"}
            />
          </div>
          <div className={styles.batchesChildren}>
            <span>Vishal Endurance</span>
            <p>45 Min</p>
            <Button1
              name={"Book Now"}
              bgColor={"#391d94"}
              border={"none"}
              width={"20%"}
              color1={"aliceblue"}
              fontSize={"20px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
