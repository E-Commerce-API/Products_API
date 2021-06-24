let Product = require('../models/Products');
let Styles = require('../models/Styles');
let Photos = require('../models/Photos');
let Skus = require('../models/Skus');
let Features = require('../models/Features');
let RelatedProducts = require('../models/RelatedProducts');

module.exports = (app) => {

  //************ does this need to be done??? *************
  // app.get('/products', async (req, res) => {
  //   await Product.find()
  //   .then((product) => res.json(product))
  //   .catch((err) => res.status(400).json(`Error: ${err}`));
  // });

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
    const styles = await Styles.find({"productId": id}, {"_id": 0, "productId": 0});
    const photos = await Photos.find({"styleId": styles[0].id});
    const skus = await Skus.find({"styleId": styles[0].id});
    const stylesFormatted = styles.map(style => {
      return {
        "style_id": style.id,
        "name": style.name,
        "original_price": (style.original_price),
        "sale_price": (style.sale_price),
        "default?": style['default_style'] === 1 ? true : false,
        "photos": [],
        "skus": {}
      }
    })
    const final = {
      product_id: id,
      results: stylesFormatted
    }



    console.log(final);
    res.end();
  });

  app.get('/products/:product_id/related', async (req, res) => {
    const id = req.params.product_id;
    const relatedProd = await RelatedProducts.find({"current_product_id": id}, {"_id": 0, "id": 0, "current_product_id": 0});
    const relatedProds = relatedProd.map(item => item.related_product_id);
    res.send(relatedProds);
    });

  // app.get('/api/test', async (req, res) => {
  //   const style = await Styles.find({"productId": 6});
  //   const photos = await Photos.find({"styleId": 5});
  //   const product = await Product.find({"id": 1});
  //   // console.log(style)
  //   res.send(product);
  //   })
};