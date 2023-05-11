import React from "react";
import classes from "./home.module.css";
import Hero from "../hero/Hero";
import DeliveryInfo from "./DeliveryInfo.jsx";
import { deliveryInfoData } from "./data.js";
import Foods from "../foods/Foods";
import NewsLetter from "../newsletter/NewsLetter";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubTitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            {deliveryInfoData.map((data, index) => {
              return (
                <DeliveryInfo
                  img={data.img}
                  h3={data.h3}
                  cn={data.cn}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <Foods />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
