require("dotenv").config();

const express = require("express");
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Product API is running");
});


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;


connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
