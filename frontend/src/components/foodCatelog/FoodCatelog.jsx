import React, { useEffect, useState } from "react";
import classes from "./foodcatelog.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const FoodCatelog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndPoint = location.pathname.split("/")[2];
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodType = async () => {
      const response = await fetch(
        `http://localhost:5000/product?category=${foodEndPoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setFilteredFoods(data);
    };
    fetchFoodType();
  }, [foodEndPoint, token]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && (
          <h2 className={classes.title}>
            The best {foodEndPoint} in the region
          </h2>
        )}
        <div className={classes.foods}>
          {filteredFoods !== 0 &&
            filteredFoods.map((f) => {
              return (
                <Link
                  to={`/food/${f._id}`}
                  className={classes.food}
                  key={f._id}
                >
                  <div className={classes.imgContainer}>
                    <img
                      src={`http://localhost:5000/images/${f.img}`}
                      className={classes.foodImg}
                      alt=""
                    />
                  </div>
                  <div className={classes.foodDetails}>
                    <h4 className={classes.foodTitle}>{f?.title}</h4>
                    <span className={classes.price}>
                      <span>$</span> {f?.price}
                    </span>
                  </div>
                </Link>
              );
            })}
          {filteredFoods?.length === 0 && (
            <h1 className={classes.noQuantity}>No {foodEndPoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatelog;
