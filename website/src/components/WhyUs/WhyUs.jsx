import React, { useEffect, useRef, useState } from "react";
import "./customStyles.css";
import styles from "./WhyUs.module.css";
// import { AdvancedBannerTop } from './AdvancedBanner'
import Heading1 from "../Headings/Heading1";
import whyUsVideo from "../../gallery/whyUsVideo.mp4";
import bgImgWhyUs from "../../gallery/bgImgWhyUs.png";
import modelWorkOutPic from "../../gallery/modelWorkOutPic.png";

const WhyUs = () => {
  const [inViewport, setInViewport] = useState(false);
  const elementRef1 = useRef(null);
  // const elementRef2 = useRef(null);

  useEffect(() => {
    // Define the options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Element is in the viewport
        setInViewport(true);
      }
    }, options);

    // Start observing the element
    if (elementRef1.current) {
      observer.observe(elementRef1.current);
    }
    

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
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
        <div
          ref={elementRef1}
          transition-style={inViewport ? "in:square:bottom-left" : ""}
          className={styles.gridBox2}
        >
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

        <div 
        // ref={elementRef2}
        transition-style={inViewport ? "in:square:bottom-right" : ""}
        className={styles.gridBox2}>
          <div
           className={styles.gridBox2Child}>
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
          <div className={styles.emptyDiv}>
            <img src={bgImgWhyUs} className={styles.parallaxImage} alt="" />
          </div>
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
