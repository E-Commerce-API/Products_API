let AllProducts = require('../models/AllProducts');
let AllStyles = require('../models/AllStyles');
let RelatedProducts = require('../models/RelatedProducts');

module.exports = (app) => {

  app.get('/products/:product_id', async (req, res) => {
    const id = req.params.product_id;
    const prod = await AllProducts.find(
      {"id": id},
      {"_id": 0, "features._id": 0, "features.id": 0, "features.product_id": 0}
    );
    res.send(prod);
  });

  app.get('/products/:product_id/styles', async (req, res) => {
    const id = req.params.product_id;

    const data = await AllStyles.find(
      {"productId": id},
      {"_id": 0, "productId": 0, "photos._id": 0, "photos.id": 0, "photos.styleId": 0, "skus._id": 0, "skus.styleId": 0}
    );

    const dataStructure = {
      "product_id": id,
      results: []
    }

    const tempDataStructure = data.map(item => {
      let alldata = {
        "style_id": item.id,
        "name": item.name,
        "original_price": (item.original_price),
        "sale_price": (item.sale_price === 'null') ? null : item.sale_price,
        "default?": item['default_style'] === 1 ? true : false,
        "photos": item.photos,
        "skus": {}
      }
      item.skus.forEach(sku => {
        let key = sku.id;
        alldata.skus[key] = {
          quantity: sku.quantity,
          size: sku.size
        }
      })
      dataStructure.results.push(alldata);
    })
    res.send(dataStructure);
  });

  app.get('/products/:product_id/related', async (req, res) => {
    const id = req.params.product_id;
    const relatedProd = await RelatedProducts.find({"current_product_id": id}, {"_id": 0, "id": 0, "current_product_id": 0});
    const relatedProds = relatedProd.map(item => item.related_product_id);
    res.send(relatedProds);
  });
};