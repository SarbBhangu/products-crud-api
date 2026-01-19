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

// GET all products (so we can grab _id values)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
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

// PUT 
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json(updatedProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});


module.exports = router;

