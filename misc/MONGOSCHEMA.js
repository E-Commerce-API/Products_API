const ProductsSchema = {
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  defaultPrice: String,
  features: [{
    feature: String,
    value: String
  }],
  // redo this ??
  styles: [StylesSchema],
  relatedProducts:[Number]
}

const StylesSchema = {
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
    // redo this ??
    skus: Schema.Types.Mixed,
  }]
}
