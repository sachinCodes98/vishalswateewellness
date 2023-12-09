import React from "react";
import styles from "./footer.module.css";
import ContactForm from "../ContactForm/ContactForm";
import AddressComp from "../AddressComp/AddressComp";
import FooterNav from "../FooterNavigation/FooterNav";
import instaLogo from "../../gallery/instaLogo.png";
import ytLogo from "../../gallery/ytLogo.png";

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

      {/* DevSachin Logos and contact */}
      <div className={styles.devSachinInfo}>
        <div className={styles.LtoRanimatedDiv}>
          <div className={styles.devSachinText}>
            <div>Designed and Developed with love by DevSachin </div>
            <div className={styles.devSachinLogos}>
              <div>
                <img src={instaLogo} alt="instaLogoForDevSachin" />
              </div>
              <div>
                <img src={ytLogo} alt="instaLogoForDevSachin" />
              </div>
              <div>
                <img src={instaLogo} alt="instaLogoForDevSachin" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last div */}
      <div className={styles.footerLastDiv}></div>
    </div>
  );
};

export default Footer;
