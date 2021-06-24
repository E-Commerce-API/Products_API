const mongoose = require('mongoose');

const { Schema } = mongoose;

const relatedProductsSchema = new Schema({
  id: Number,
  currentProuctId: Number,
  relatedProuctId: Number,
})

const RelatedProducts = mongoose.model("RelatedProducts", relatedProductsSchema, "RelatedProducts");

module.exports = RelatedProducts;