const mongoose = require('mongoose');

const { Schema } = mongoose;

const photosSchema = new Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnailUrl: String
})

const Photos = mongoose.model("Photos", photosSchema);

module.exports = Photos;