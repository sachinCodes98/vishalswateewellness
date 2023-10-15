import React from 'react'
import "../styles/navbar.css"
import loginIcon from "../gallery/loginIcon.png"

const Navbar = () => {
    
  return (
    <div className="navParent">
        <div className="navLeftBox">
            <div className="navLeftBtns">Home</div>
            <div className="navLeftBtns">About</div>
            <div className="navLeftBtns">Classes</div>
            <div className="navLeftBtns">Challenges</div>
            <div className="navLeftBtns">Plans</div>
            <div className="navLeftBtns">Contact</div>
        </div>
        <div className="navRightBox">
            <div className="membershipBtnDiv">
                <p>Membership</p>
            </div>
            <div className="loginBtnDiv">
                <img className="loginIcon" src={loginIcon} alt="login" />
                <p>Login</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar