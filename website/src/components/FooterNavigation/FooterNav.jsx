import React from 'react'
import styles from "../FooterNavigation/footerNav.module.css"
import ytLogo from "../../gallery/ytLogo.png"
import instaLogo from "../../gallery/instaLogo.png"
import fbLogo from "../../gallery/fbLogo.png"

const FooterNav = () => {
  return (
    <>
        <p className={styles.footerNavLink}>Home</p>
        <p className={styles.footerNavLink}>About</p>
        <p className={styles.footerNavLink}>Classes</p>
        <p className={styles.footerNavLink}>Challenges</p>
        <p className={styles.footerNavLink}>Plans</p>
        <p className={styles.footerNavLink}>Contact</p>
        <div className={styles.logosContainer}>
          <div className={styles.logosDiv}>
            <img src={ytLogo} alt="ytLogo" />
          </div>
          <div className={styles.logosDiv}>
            <img src={instaLogo} alt="instaLogo" />
          </div>
          <div className={styles.logosDiv}>
            <img src={fbLogo} alt="fbLogo" />
          </div>
        </div>
    </>
  )
}

export default FooterNav