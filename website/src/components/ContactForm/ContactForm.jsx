import React from "react";
import Heading1 from "../Headings/Heading1";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <Heading1 classProp={"heading2"} contentName={"Let's Get Moving"} />
      <p className={styles.contactFormpTag}>Sign Up For Updates</p>
      <div className={styles.ContactFormMain}>
        <form action="submit">
          <label className={styles.formLabel} htmlFor="fullName">
            Full Name
          </label>
          <br />
          <input className={styles.formInput} type="text" placeHolder="" />
          <br />
          <label className={styles.formLabel} htmlFor="email">
            Email *
          </label>
          <br />
          <input
            className={styles.formInput}
            type="email"
            placeHolder=""
            required
          />
          <br />
          <label className={styles.formLabel} htmlFor="number">
            Phone Number
          </label>
          <br />
          <input className={styles.formInput} type="text" placeHolder="" />
          <br />
          <label className={styles.formLabel} htmlFor="message">
            Your Message
          </label>
          <br />
          <textarea className={styles.formInput} type="text" placeHolder="" />
          <br />
          <input className={styles.formSubmitBtn} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
