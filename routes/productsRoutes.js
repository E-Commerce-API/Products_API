let Product = require('../models/Products');
let Styles = require('../models/Styles');
let Photos = require('../models/Photos');
let Skus = require('../models/Skus');
let Features = require('../models/Features');
let RelatedProducts = require('../models/RelatedProducts');

module.exports = (app) => {

  // does this need to be done???
  app.get('/products', async (req, res) => {
    await Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
  });

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
    await Product.findById(req.params.id)
      .then((styles) => res.json(styles))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.get('/products/:product_id/related', async (req, res) => {
    await Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json(`Error: ${err}`));
    });

  // app.get('/api/test', async (req, res) => {
  //   const style = await Styles.find({"productId": 6});
  //   const photos = await Photos.find({"styleId": 5});
  //   const product = await Product.find({"id": 1});
  //   // console.log(style)
  //   res.send(product);
  //   })
};