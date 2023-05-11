import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import authControllers from "./controllers/authControllers.js";
import productControllers from "./controllers/productControllers.js";
import uploadControllers from "./controllers/uploadControllers.js";

dotenv.config();
const app = express();

// using middlewares
app.use(cors());
// using this two bcoz without them req.body is not accessible
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

// using the routes
app.use("/auth", authControllers);
app.use("/product", productControllers);
app.use("/upload", uploadControllers);

//Connecting to database
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// listening at
app.listen(process.env.PORT, () => {
  console.log("Server is running at http://localhost:5000");
});
