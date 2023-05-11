import React, { useState } from "react";
import classes from "./create.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const Formdata = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + image.name;
        Formdata.append("filename", filename);
        Formdata.append("image", image);

        await fetch("http://localhost:5000/upload/image", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: Formdata,
        });
      }

      const response = await fetch("http://localhost:5000/product", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        }),
      });
      const food = await response.json();
      navigate(`/food/${food._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const HandleCloseImg = () => {
    setImage("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title:</label>
            <input
              type="text"
              className={classes.input}
              placeholder="title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description:</label>
            <input
              type="text"
              className={classes.input}
              placeholder="descrpition..."
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category:</label>
            <input
              type="text"
              className={classes.input}
              placeholder="Category..."
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>
              Image: <span>Upload here</span>
            </label>
            <input
              id="image"
              type="file"
              className={classes.input}
              placeholder="Image..."
              onChange={onChangeImage}
              style={{
                display: "none",
              }}
            />
            {image && (
              <p className={classes.imageName}>
                {image.name}{" "}
                <AiOutlineCloseCircle
                  onClick={HandleCloseImg}
                  className={classes.closeIcon}
                />
              </p>
            )}
          </div>
          <div className={classes.inputWrapper}>
            <label>Price:</label>
            <input
              type="number"
              className={classes.input}
              placeholder="Price..."
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review:</label>
            <input
              type="text"
              className={classes.input}
              placeholder="Review..."
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
