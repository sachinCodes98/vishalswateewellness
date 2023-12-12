import React from 'react'
import ResponsiveGrid from '../ResponsiveGrid/ResponsiveGrid';


import image1 from "../../gallery/sliding01.png"; // Adjust the paths to your image files
import image2 from "../../gallery/sliding02.png";
import image3 from "../../gallery/sliding03.png";
import image4 from "../../gallery/sliding04.png";
import image5 from "../../gallery/sliding05.png";

const text1 = "30 Days Plan";
const text2 = "90 Days Plan";
const text3 = "Healthy Diet Plan";
const text4 = "Healthy Breakfast Plan";
const text5 = "Meal Replacement Plan";
const text6 = "Cellular Nutrition Plan";
const text7 = "Complete Body Need Plan";

const cardName1 = "30 Days Plan";
const cardName2 = "90 Days Plan";
const cardName3 = "Healthy Diet Plan";
const cardName4 = "Healthy Breakfast Plan";
const cardName5 = "Meal Replacement Plan";
const cardName6 = "Cellular Nutrition Plan";
const cardName7 = "Complete Body Need Plan";

const plansData = [
  { img: image1, text: text1, cardName:cardName1 },
  { img: image2, text: text2, cardName:cardName2 },
  { img: image3, text: text3, cardName:cardName3 },
  { img: image4, text: text4, cardName:cardName4 },
  { img: image5, text: text5, cardName:cardName5 },
  { img: image1, text: text6, cardName:cardName6 },
  { img: image2, text: text7, cardName:cardName7 }
]; // Add more images as needed



const Plans = () => {
  return (
    <>
        <ResponsiveGrid data={plansData} />
    </>
  )
}

export default Plans