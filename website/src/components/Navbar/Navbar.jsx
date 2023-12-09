import React from "react";
import styles from "./Navbar.module.css";
// import loginIcon from "../../gallery/loginIcon.png";
import getinShape_logo from "../../gallery/getinShape_logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.navParent}>
      <div className={styles.navLeftBox}>
        <div className={styles.navLeftBtns}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navLeftBtns}>
          <Link to="/about">About</Link>
        </div>
        <div className={styles.navLeftBtns}>
          <Link to="/classes">Classes</Link>
        </div>
        <div className={styles.navLeftBtns}>Challenges</div>
        <div className={styles.navLeftBtns}>Plans</div>
        <div className={styles.navLeftBtns}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.navRightBox}>


      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isMenuOpen && styles.barOpen}`} />
          <div className={`${styles.bar} ${isMenuOpen && styles.barOpen}`} />
          <div className={`${styles.bar} ${isMenuOpen && styles.barOpen}`} />
        </div>


        <div className={styles.membershipBtnDiv}>
          <p>Membership</p>
        </div>
        {/* <div className={styles.loginBtnDiv}>
          <img className={styles.loginIcon} src={loginIcon} alt="login" />
          <p>Login</p>
        </div> */}
        <div className={styles.loginBtnDiv}>
          <img className={styles.logoIcon} src={getinShape_logo} alt="logo" />
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/classes" onClick={toggleMenu}>
            Classes
          </Link>
          <Link to="/challenges" onClick={toggleMenu}>
          Challenges
          </Link>
          <Link to="/plans" onClick={toggleMenu}>
          Plans
          </Link>
          {/* <div onClick={toggleMenu}>Challenges</div>
          <div onClick={toggleMenu}>Plans</div> */}
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
