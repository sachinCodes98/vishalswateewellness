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
          <input
            id="fullName" // Add a unique id attribute
            className={styles.formInput}
            type="text"
            placeholder=""
          />
          <br />
          <label className={styles.formLabel} htmlFor="email">
            Email *
          </label>
          <br />
          <input
            id="email" // Add a unique id attribute
            className={styles.formInput}
            type="email"
            placeholder=""
            required
          />
          <br />
          <label className={styles.formLabel} htmlFor="phoneNumber">
            Phone Number
          </label>
          <br />
          <input
            id="phoneNumber" // Add a unique id attribute
            className={styles.formInput}
            type="text"
            placeholder=""
          />
          <br />
          <label className={styles.formLabel} htmlFor="message">
            Your Message
          </label>
          <br />
          <textarea
            id="message" // Add a unique id attribute
            className={styles.formInput}
            type="text"
            placeholder=""
          ></textarea>
          <br />
          <input id="formSubmitBtn" className={styles.formSubmitBtn} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
