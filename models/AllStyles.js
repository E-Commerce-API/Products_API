const mongoose = require('mongoose');

const { Schema } = mongoose;

const allStylesSchema = new Schema({
    id: Number,
    productId: Number,
    name: String,
    sale_price: String,
    original_price: Number,
    default_style: Number,
    photos: [Schema.Types.Mixed],
    skus: [Schema.Types.Mixed]
})

const AllStyles = mongoose.model("AllStyles", allStylesSchema, "AllStyles");

module.exports = AllStyles;
