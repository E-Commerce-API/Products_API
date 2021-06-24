const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
})

const Products = mongoose.model("Products", productsSchema, "Products");

module.exports = Products;