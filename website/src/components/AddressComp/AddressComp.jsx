import React from "react";
import Heading1 from "../Headings/Heading1";
import styles from "../AddressComp/addressComp.module.css";
import Button1 from "../Button1/Button1";
import { Link } from "react-router-dom";

const AddressComp = () => {
  return (
    <>
      <Heading1
        classProp={"heading3"}
        contentName={`Behind Bank Of Baroda, Near Sangli High-School, Vakharbag, Sangli, Pin: 416406`}
      />
      <hr className={styles.hrLine} />
      <div className={styles.contactSpansContainer}>
        <span className={styles.contactSpans}>
          <a href="tel:7756991439">Mob : 7756991439</a>
        </span>
        <span className={styles.contactSpans}> | </span>{" "}
        <span className={styles.contactSpans}>
          <a href="tel:7821014616">
          Mob : 7821014616
          </a>
          </span>
      </div>
      <Button1
        classProp={"button2"}
        name={"Book 5 Days Free Feeling Program"}
      />
    </>
  );
};

export default AddressComp;
