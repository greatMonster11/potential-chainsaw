import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .catch(error => console.log(error.reason));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB connected !!!");
});

const app = express();

app.use("/api/users", userRoute);
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(item => item._id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.listen(5000, () => console.log("Server started at http://localhost:5000"));
