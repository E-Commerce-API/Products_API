let Product = require('../models/Products');
let Styles = require('../models/Styles');

module.exports = (app) => {
  app.get('/products' async (req, res) => {
    await Product.find()
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.get('/products/:product_id' async (req, res) => {
    await Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.get('/products/:product_id/styles' async (req, res) => {
    await Product.findById(req.params.id)
      .then((styles) => res.json(styles))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.get('/products/:product_id/related' async (req, res) => {
    await Product.findById(req.params.id)
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });


};