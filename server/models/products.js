const mongoose = require("mongoose");

const Product = mongoose.model('products',{ 
    name: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  });

module.exports = { Product };
