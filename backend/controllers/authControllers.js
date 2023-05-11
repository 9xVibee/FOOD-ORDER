import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const authControllers = express.Router();

// register
authControllers.post("/register", async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });

    if (isExisting) {
      throw new Error(
        "Already there is an account with this email ID! try another!"
      );
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const { password, ...others } = newUser._doc;

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRETE,
      { expiresIn: "5h" }
    );

    return res.status(200).json({ others, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// log in
authControllers.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new Error("User not exist with such ID");
  }

  //   compairing the password
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    throw new Error("Password is incorrect");
  }

  const { password, ...others } = user._doc;
  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRETE,
    { expiresIn: "5h" }
  );

  return res.status(200).json({
    others,
    token,
  });
});

export default authControllers;
