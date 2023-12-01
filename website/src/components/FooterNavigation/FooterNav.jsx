import React from 'react'
import styles from "../FooterNavigation/footerNav.module.css"
import ytLogo from "../../gallery/ytLogo.png"
import instaLogo from "../../gallery/instaLogo.png"
import fbLogo from "../../gallery/fbLogo.png"
import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
    <>
        <p >
          <Link className={styles.footerNavLink} to="/">Home</Link>
        </p>
        <p >
          <Link className={styles.footerNavLink} to="/about">About</Link>
        </p>
        <p >
          <Link className={styles.footerNavLink} to="/classes">Classes</Link>
        </p>
        <p >
          <Link className={styles.footerNavLink} to="/challenges">Challenges</Link>
        </p>
        <p >
          <Link className={styles.footerNavLink} to="/plans">Plans</Link>
        </p>
        <p >
          <Link className={styles.footerNavLink} to="/contact">Contact</Link>
        </p>
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