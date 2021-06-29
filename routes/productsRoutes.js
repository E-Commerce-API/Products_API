let Product = require('../models/Products');
let AllProducts = require('../models/AllProducts');
let AllStyles = require('../models/AllStyles');
let Styles = require('../models/Styles');
let Photos = require('../models/Photos');
let Skus = require('../models/Skus');
let Features = require('../models/Features');
let RelatedProducts = require('../models/RelatedProducts');

module.exports = (app) => {

  app.get('/products/:product_id', async (req, res) => {
    const id = req.params.product_id;
    // const prod = await Product.find({"id": id}, {"_id": 0})
    // const feature = await Features.find({"product_id": Number(id)}, {"_id": 0, "id": 0, "product_id": 0})

    // const final = [{
    //   "id": prod[0].id,
    //   "name": prod[0].name,
    //   "slogan": prod[0].slogan,
    //   "description": prod[0].description,
    //   "category": prod[0].category,
    //   "default_price": prod[0].default_price,
    //   "features": feature
    // }]
    // res.send(final);
    const prod = await AllProducts.find(
      {"id": id},
      {"_id": 0, "features._id": 0, "features.id": 0, "features.product_id": 0}
    );
    res.send(prod);

  });

  app.get('/products/:product_id/styles', async (req, res) => {
    const id = req.params.product_id;

    // const finalData = {
    //   product_id: id,
    //   results: []
    // };
    // await Styles.find({"productId": id}, {"_id": 0, "productId": 0})
    //   .then((styles) => {
    //     styles.map(async (style) => {
    //       await Photos.find({"styleId": style.id}, {"_id": 0, "id": 0, "styleId": 0})
    //         .then(async (photo) => {
    //           await Skus.find({"styleId": style.id})
    //             .then((skus) => {
    //               const data = {
    //                 "style_id": style.id,
    //                 "name": style.name,
    //                 "original_price": (style.original_price),
    //                 "sale_price": (style.sale_price) || null,
    //                 "default?": style['default_style'] === 1 ? true : false,
    //                 "photos": photo,
    //                 "skus": {}
    //               }
    //               skus.forEach(sku => {
    //                 let key = sku.id;
    //                 data.skus[key] = {
    //                   quantity: sku.quantity,
    //                   size: sku.size
    //                 }
    //               })
    //               finalData.results.push(data)
    //             })
    //         })
    //         if (finalData.results.length === styles.length){
    //           res.send(finalData);
    //         }
    //       })
    //   })

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