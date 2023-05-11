import React from "react";
import classes from "./home.module.css";

const DeliveryInfo = ({ img, h3, cn }) => {
  return (
    <div className={`${classes.deliveryInfo}`}>
      <img src={img} alt="" className={cn} />
      <h3>{h3}</h3>
    </div>
  );
};

export default DeliveryInfo;
