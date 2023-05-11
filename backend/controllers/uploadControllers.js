import express from "express";
import multer from "multer";
import { verifyToken } from "../middlewares/verifyToken.js";

const uploadControllers = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage,
  // same as storage : storage
});

uploadControllers.post(
  "/image",
  verifyToken,
  upload.single("image"),
  (req, res) => {
    try {
      return res.status(201).json({ msg: "Image successfully uploaded" });
    } catch (error) {
      console.log(error.message);
    }
  }
);

export default uploadControllers;
