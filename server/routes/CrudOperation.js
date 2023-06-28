const express = require("express");
const { Product } = require("../models/products");
const router = express.Router();

router.post("/products/create", async (req, res) => {
  const { name, weight, height } = req.body.personData;

  try {
    const newProduct = new Product({ name, weight, height });
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/products/get", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/products/update", async (req, res) => {
  console.log(req.body);
  const { name, weight, height,_id } = req.body.update;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      { name, weight, height },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/products/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
