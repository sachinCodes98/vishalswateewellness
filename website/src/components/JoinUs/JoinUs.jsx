import React from "react";
import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <div className={styles.joinUsContainer}>
      <div className={styles.joinUsMain}>
        <p className={styles.joinUsTitle}>Join Us On WhatsApp !</p>
        <p className={styles.joinUsDescription}>
          {" "}
          We let you easily stay in touch and updated with us on the go. Just
          add your Phone Number and Name we’ll text you on WhatsApp.
        </p>
        <form action="submit">
          <div className={styles.joinUsInputsDiv}>
            <input
              className={styles.clientNameInput}
              type="text"
              placeholder="Your Name"
            />
            <br />
            <input
              className={styles.clientNumberInput}
              type="number"
              placeholder="Phone Number"
              inputMode="numeric"
            />
          </div>
          <br />
          <input
            className={styles.joinUsSubmitBtn}
            type="button"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
