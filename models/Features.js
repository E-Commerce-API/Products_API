const mongoose = require('mongoose');

const { Schema } = mongoose;

const featuresSchema = new Schema({
  id: Number,
  productId: Number,
  feature: String,
  value: String
})

const Features = mongoose.model("Features", featuresSchema);

module.exports = Features;