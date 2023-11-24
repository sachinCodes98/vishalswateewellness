import React from "react";
import styles from "./footer.module.css";
import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.footerMain}>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
