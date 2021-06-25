const mongoose = require('mongoose');

const { Schema } = mongoose;

const photosSchema = new Schema({
  id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
})

const Photos = mongoose.model("Photos", photosSchema, "Photos");

module.exports = Photos;