const Product = require('../models/productModel');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    price,
    description,
    productPictures,
    category,
    createdBy,
  } = req.body;

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    productPictures,
    category,
    createdBy,
  });
};
