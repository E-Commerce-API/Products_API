const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  defaultPrice: String,
})

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;