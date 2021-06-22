const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  defaultPrice: String,
  features: [{
    feature: String,
    value: String
  }],
  styles: [StylesSchema],
  relatedProducts:[Number]
})

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;