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

// GET Advanced Querying
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sortBy, page = 1, limit = 10 } = req.query;

    // 1) Build filter object dynamically
    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // 2) Build sort object
    let sortOption = {};
    if (sortBy === "price_asc") sortOption = { price: 1 };
    if (sortBy === "price_desc") sortOption = { price: -1 };

    // 3) Pagination
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // 4) Query
    const products = await Product.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

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

// DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
});



module.exports = router;

