import React from 'react'
import styles from "../FooterNavigation/footerNav.module.css"

const FooterNav = () => {
  return (
    <>
        <p className={styles.footerNavLink}>Home</p>
        <p className={styles.footerNavLink}>About</p>
        <p className={styles.footerNavLink}>Classes</p>
        <p className={styles.footerNavLink}>Challenges</p>
        <p className={styles.footerNavLink}>Plans</p>
        <p className={styles.footerNavLink}>Contact</p>
    </>
  )
}

export default FooterNav