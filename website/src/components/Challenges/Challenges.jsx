import React from 'react'
import ResponsiveGrid from '../ResponsiveGrid/ResponsiveGrid'

import image1 from "../../gallery/sliding01.png"; // Adjust the paths to your image files
import image2 from "../../gallery/sliding02.png";
import image3 from "../../gallery/sliding03.png";
import image4 from "../../gallery/sliding04.png";
import image5 from "../../gallery/sliding05.png";

const text1 = "Weight Loss Challenge";
const text2 = "Ideal Weight Challenge";
const text3 = "Zero Figure Challenge";
const text4 = "Flat tummy Challenge";
const text5 = "Zero fat Challenge";
const text6 = "Muscle gain Challenge";
const text7 = "90 Days Challenge";
const text8 = "Healthy Skin Challenge";
const text9 = "Body Transformation Challenge";

const cardName1 = "Weight loss challenge";
const cardName2 = "Ideal Weight Challenge";
const cardName3 = "Zero Figure Challenge";
const cardName4 = "Flat tummy Challenge";
const cardName5 = "Zero fat Challenge";
const cardName6 = "Muscle gain Challenge";
const cardName7 = "90 Days Challenge";
const cardName8 = "Healthy Skin Challenge";
const cardName9 = "Body Transformation Challenge";

const challengesData = [
  { img: image1, text: text1, cardName:cardName1 },
  { img: image2, text: text2, cardName:cardName2 },
  { img: image3, text: text3, cardName:cardName3 },
  { img: image4, text: text4, cardName:cardName4 },
  { img: image5, text: text5, cardName:cardName5 },
  { img: image1, text: text6, cardName:cardName6 },
  { img: image2, text: text7, cardName:cardName7 },
  { img: image3, text: text8, cardName:cardName8 },
  { img: image4, text: text9, cardName:cardName9 },
]; // Add more images as needed

const Challenges = () => {
  return (
    <div>
        <ResponsiveGrid data={challengesData} />
    </div>
  )
}

export default Challenges