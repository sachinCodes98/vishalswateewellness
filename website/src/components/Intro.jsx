import React from 'react'
import "../styles/intro.css"
import Cursor from './Cursor'

const Intro = () => {
  return (
    <div className="introContainer">
            <div className="introBgOnly"></div>
        <div className="introTextDiv">
            <p className="introText">Swatee Vishal- Functional Fitness Studio</p>
            <div className="introBoldTextDiv">
                <span className="fitnessTextBold">Where Fitness Becomes Your Lifestyle</span>
            </div>
        </div>
        <Cursor />
    </div>
  )
}

export default Intro