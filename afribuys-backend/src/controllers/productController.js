const Product = require('../models/productModel');

exports.createProduct = (req, res) => {
  res.status(200).json({ file: req.files, body: req.body });
};
