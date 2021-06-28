const mongoose = require('mongoose');

const { Schema } = mongoose;

const allProductsSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [Schema.Types.Mixed],
})

const AllProducts = mongoose.model("AllProducts", allProductsSchema, "AllProducts");

module.exports = AllProducts;