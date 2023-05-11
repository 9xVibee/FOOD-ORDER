import React from "react";
import classes from "./checkout.module.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const { products } = useSelector((state) => state.cart);
  let totalPrice = 0;
  products.map((product) => (totalPrice += product.quantity * product.price));
  
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successfull</h2>
        <p>Expext in 1 hour</p>
        <span>Total price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckOut;
