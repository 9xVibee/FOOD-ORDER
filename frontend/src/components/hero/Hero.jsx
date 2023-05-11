/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import manEatingImg from "../../assets/man-having-his-meal.svg";

const Hero = () => {
  return (
    <div id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave delicious food</h2>
          <p className={classes.firstMsg}>
            But going out to take <span>food costs time....</span>
          </p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br />{" "}
            <span>delicious </span>
            from our restaurant
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the client above. They are our single
            most important thing for the business.
          </p>
          <div className={classes.button}>
            <button className={classes.buttonOrder}>Order Now!</button>
            <button className={classes.buttonsee}>
              <a href="#foods">
                See what's available <AiOutlineArrowDown />
              </a>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEatingImg} alt="" className={classes.manEatingImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
