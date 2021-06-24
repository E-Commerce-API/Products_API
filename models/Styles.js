const mongoose = require('mongoose');

const { Schema } = mongoose;

const stylesSchema = new Schema({
    id: Number,
    productId: Number,
    name: String,
    sale_price: Number,
    original_price: Number,
    default_style: Number,
})

const Styles = mongoose.model("Styles", stylesSchema, "Styles");

module.exports = Styles;
