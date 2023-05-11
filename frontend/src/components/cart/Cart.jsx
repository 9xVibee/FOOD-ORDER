import React from "react";
import classes from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.cart);
  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct({ _id: productId }));
  };

  let totalPrice = 0;
  totalPrice = products.map((product) => product.quantity * product.price);

  const handleOrder = () => {
    if (products.length > 0) navigate("/checkout");
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <div className={classes.product} key={product._id}>
                  <div
                    className={classes.closeBtn}
                    onClick={() => handleRemoveProduct(product._id)}
                  >
                    <AiOutlineClose />
                  </div>
                  <img
                    src={`http://localhost:5000/images/${product.img}`}
                    className={classes.img}
                    alt=""
                  />
                  <div className={classes.productData}>
                    <h3 className={classes.title}>{product.title}</h3>
                    <div className={classes.productAndQuantity}>
                      <span className={classes.quantity}>
                        {product.quantity} x
                      </span>
                      <span className={classes.price}>
                        <span>$</span> {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className={classes.NoProducts}>
              No products in the cart. go shopping!
            </h1>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.totalProductMsg}>
            Total Products : {products.length}
          </div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal : ${totalPrice}</span>
            <span
              className={classes.orderNowBtn}
              disabled={products.length === 0}
              onClick={handleOrder}
            >
              Order now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
