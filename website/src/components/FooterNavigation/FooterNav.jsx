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
            <Link to="">
              <img src={ytLogo} alt="ytLogo" />
            </Link>
          </div>
          <div className={styles.logosDiv}>
            <Link to="https://www.instagram.com/vishalfitcoach24/?hl=en">
              <img src={instaLogo} alt="instaLogo" />
            </Link>
          </div>
          <div className={styles.logosDiv}>
            <Link to="https://www.facebook.com/vishalfitcoach24">
              <img src={fbLogo} alt="fbLogo" />
            </Link>
          </div>
        </div>
    </>
  )
}

export default FooterNav