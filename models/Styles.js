const mongoose = require('mongoose');

const { Schema } = mongoose;

const stylesSchema = new Schema({
    id: Number,
    productId: Number,
    name: String,
    salePrice: String,
    originalPrice: String,
    isDefault: Boolean,
})

const Styles = mongoose.model("Styles", stylesSchema, "Styles");

module.exports = Styles;
