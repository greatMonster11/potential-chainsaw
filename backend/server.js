import express from "express";
import data from "./data";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected !!!"))
  .catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/product/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find(item => item._id === productId);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

app.listen(5000, () => console.log("Server started at http://localhost:5000"));
