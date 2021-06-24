const mongoose = require('mongoose');

const { Schema } = mongoose;

const relatedProductsSchema = new Schema({
  id: Number,
  current_product_id: Number,
  related_product_id: Number,
})

const RelatedProducts = mongoose.model("RelatedProducts", relatedProductsSchema, "RelatedProducts");

module.exports = RelatedProducts;