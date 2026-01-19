const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;

