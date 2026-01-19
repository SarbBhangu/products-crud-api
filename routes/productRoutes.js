const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
// POST
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    
    return res.status(400).json({ error: error.message });
  }
});

// GET
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
});

module.exports = router;

