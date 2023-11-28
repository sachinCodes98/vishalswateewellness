import React from "react";
import styles from "./footer.module.css";
import ContactForm from "../ContactForm/ContactForm";
import AddressComp from "../AddressComp/AddressComp";
import FooterNav from "../FooterNavigation/FooterNav";

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
        <div className={styles.addressComp}>
          <AddressComp />
        </div>
        <div className={styles.footerNavComp}>
          <FooterNav />
        </div>
      </div>
    </div>
  );
};

export default Footer;
