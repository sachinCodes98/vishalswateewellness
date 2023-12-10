import React from "react";
import styles from "./footer.module.css";
import ContactForm from "../ContactForm/ContactForm";
import AddressComp from "../AddressComp/AddressComp";
import FooterNav from "../FooterNavigation/FooterNav";
import instaLogo from "../../gallery/instaLogo.png";
import ytLogo from "../../gallery/ytLogo.png";
import fbLogo from "../../gallery/fbLogo.png";
import { Link } from "react-router-dom";

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
            <div>Designed and Developed with love ♥ by Coder_Sachin </div>
            <div className={styles.devSachinLogos}>
              <div>
                <Link to="https://www.instagram.com/coder_sachin_/">
                  <img className={styles.devSachinContactIcons} src={instaLogo} alt="instaLogoForDevSachin" />
                </Link>
              </div>
              <div>
                <Link to="https://www.youtube.com/channel/UCcqnIDjHuX0VOWJVD47e_QQ">
                  <img className={styles.devSachinContactIcons} src={ytLogo} alt="ytLogoForDevSachin" />
                </Link>
              </div>
              <div>
                <Link to="https://www.facebook.com/profile.php?id=61554407583487">
                  <img className={styles.devSachinContactIcons} src={fbLogo} alt="fbLogoForDevSachin" />
                </Link>
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
