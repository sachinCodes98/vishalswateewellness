import React from "react";
import Heading1 from "../Headings/Heading1";
import styles from "../AddressComp/addressComp.module.css";
import Button1 from "../Button1/Button1";

const AddressComp = () => {
  return (
    <>
      <Heading1
        classProp={"heading3"}
        contentName={`500 Terry Francine Street San Francisco, CA 94158 Email: info@mysite.com`}
      />
      <hr className={styles.hrLine} />
      <div className={styles.contactSpansContainer}>
        <span className={styles.contactSpans}>Tel: 123-456-7890 </span>
        <span className={styles.contactSpans}> | </span>{" "}
        <span className={styles.contactSpans}>Fax: 123-456-7890</span>
      </div>
      <Button1
        name={"Book A Free Trial Now"}
        bgColor={"transparent"}
        border={"2px solid aliceblue"}
        width={"80%"}
        color1={"white"}
        fontSize={"23px"}
        height={"45px"}
      />
    </>
  );
};

export default AddressComp;
