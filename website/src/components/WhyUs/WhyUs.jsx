import React from "react";
import "./customStyles.css";
import styles from "./WhyUs.module.css";
// import { AdvancedBannerTop } from './AdvancedBanner'
import Heading1 from "../Headings/Heading1";
import whyUsVideo from "../../gallery/whyUsVideo.mp4";
import bgImgWhyUs from "../../gallery/bgImgWhyUs.png";
import modelWorkOutPic from "../../gallery/modelWorkOutPic.png";
import { useEffect } from "react";

const WhyUs = () => {
  useEffect(() => {
    // Add a scroll event listener to handle the parallax effect
    const handleScroll = () => {
      const img = document.querySelector(".parallaxImage");
      if (img) {
        const scrollPosition = window.scrollY;
        img.style.transform = `translateY(-${scrollPosition / 2}px)`; // Adjust the speed of the parallax effect by changing the divisor
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.whyUsContainer}>
      {/* <AdvancedBannerTop />
      <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}
      <Heading1
        classProp={"heading1"}
        contentName={"Join Base and Transform Your Body and Mind"}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.whyUsGridBox}>
        {/* ************ FIRST ROW ************ */}

        <div className={styles.gridBox1}>
          <video autoPlay loop>
            <source
              className={styles.whyUsVid}
              src={whyUsVideo}
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.gridBox2}>
          <div className={styles.gridBox2Child}>
            <Heading1 classProp={"heading1"} contentName={"Community"} />
            <p className={styles.communityText}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>

        {/* ************ SECOND ROW ************ */}

        <div className={styles.gridBox2}>
          <div className={styles.gridBox2Child}>
            <Heading1 classProp={"heading1"} contentName={"Motivation"} />
            <p className={styles.communityText}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className={styles.gridBox1}>
          <img className={styles.parallaxImage} src={bgImgWhyUs} alt="" />
        </div>

        {/* ************ THIRD ROW ************ */}

        <div className={styles.gridBox1}>
          <img src={modelWorkOutPic} alt="" />
        </div>
        <div className={styles.gridBox2}>
          <div className={styles.gridBox2Child}>
            <Heading1 classProp={"heading1"} contentName={"Results"} />
            <p className={styles.communityText}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
