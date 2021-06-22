const mongoose = require('mongoose');

const { Schema } = mongoose;

const stylesSchema = new Schema(
  {
    productId: Number,
    results: [{
      styleId: String,
      name: String,
      originalPrice: String,
      salePrice: String,
      isDefault: Boolean,
      photos: [{
        thumbnailUrl: String,
        url: String,
      }],
      skus: Schema.Types.Mixed,
    }]
  }
)

const Styles = mongoose.model("Styles", stylesSchema);

module.exports = Styles;
