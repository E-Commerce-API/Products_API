const mongoose = require('mongoose');

const { Schema } = mongoose;

const skusSchema = new Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
})

const Skus = mongoose.model("Skus", skusSchema);

module.exports = Skus;