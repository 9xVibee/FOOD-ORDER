import React from "react";
import classes from "./newsletter.module.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";

const NewsLetter = () => {
  return (
    <section id="contacts" className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subTitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Enter your email.." />
          <AiOutlineSend className={classes.sendIcon} />
        </div>
        <img
          src={newsletterIllustration}
          alt=""
          className={classes.illustration}
        />
      </div>
    </section>
  );
};

export default NewsLetter;
