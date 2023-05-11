import express from "express";
import Product from "../models/Product.js";
import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js";

const productControllers = express.Router();

// get all
productControllers.get("/", verifyToken, async (req, res) => {
  try {
    const products = await Product.find(req.query);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

// get one by id
productControllers.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await Product.findById(productID);

    if (!product)
      return res.status(500).json({ msg: "No such product with this ID" });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});

// create product
productControllers.post("/", verifyTokenAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

export default productControllers;
