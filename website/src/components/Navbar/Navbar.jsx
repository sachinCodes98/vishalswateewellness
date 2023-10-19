import React from 'react'
import styles from "./Navbar.module.css"
import loginIcon from "../../gallery/loginIcon.png"

const Navbar = () => {
    
  return (
    <div className={styles.navParent}>
        <div className={styles.navLeftBox}>
            <div className={styles.navLeftBtns}>Home</div>
            <div className={styles.navLeftBtns}>About</div>
            <div className={styles.navLeftBtns}>Classes</div>
            <div className={styles.navLeftBtns}>Challenges</div>
            <div className={styles.navLeftBtns}>Plans</div>
            <div className={styles.navLeftBtns}>Contact</div>
        </div>
        <div className={styles.navRightBox}>
            <div className={styles.membershipBtnDiv}>
                <p>Membership</p>
            </div>
            <div className={styles.loginBtnDiv}>
                <img className={styles.loginIcon} src={loginIcon} alt="login" />
                <p>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar