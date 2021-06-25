let Product = require('../models/Products');
let Styles = require('../models/Styles');
let Photos = require('../models/Photos');
let Skus = require('../models/Skus');
let Features = require('../models/Features');
let RelatedProducts = require('../models/RelatedProducts');

module.exports = (app) => {

  app.get('/products/:product_id', async (req, res) => {
    const id = req.params.product_id;
    const prod = await Product.find({"id": id}, {"_id": 0})
    const feature = await Features.find({"product_id": Number(id)}, {"_id": 0, "id": 0, "product_id": 0})

    const final = [{
      "id": prod[0].id,
      "name": prod[0].name,
      "slogan": prod[0].slogan,
      "description": prod[0].description,
      "category": prod[0].category,
      "default_price": prod[0].default_price,
      "features": feature
    }]
    res.send(final);
  });

  app.get('/products/:product_id/styles', async (req, res) => {
    const id = req.params.product_id;

    const finalData = {
      product_id: id,
      results: []
    };
    await Styles.find({"productId": id}, {"_id": 0, "productId": 0})
      .then((styles) => {
        styles.map(async (style) => {
          await Photos.find({"styleId": style.id}, {"_id": 0, "id": 0, "styleId": 0})
            .then(async (photo) => {
              await Skus.find({"styleId": style.id})
                .then((skus) => {
                  const data = {
                    "style_id": style.id,
                    "name": style.name,
                    "original_price": (style.original_price),
                    "sale_price": (style.sale_price) || null,
                    "default?": style['default_style'] === 1 ? true : false,
                    "photos": photo,
                    "skus": {}
                  }
                  skus.forEach(sku => {
                    let key = sku.id;
                    data.skus[key] = {
                      quantity: sku.quantity,
                      size: sku.size
                    }
                  })
                  finalData.results.push(data)
                })
            })
            if (finalData.results.length === styles.length){
              res.send(finalData);
            }
          })
      })
  });

  app.get('/products/:product_id/related', async (req, res) => {
    const id = req.params.product_id;
    const relatedProd = await RelatedProducts.find({"current_product_id": id}, {"_id": 0, "id": 0, "current_product_id": 0});
    const relatedProds = relatedProd.map(item => item.related_product_id);
    res.send(relatedProds);
    });
};