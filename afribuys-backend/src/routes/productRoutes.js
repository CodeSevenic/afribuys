const express = require('express');
// const {} = require('../controllers/categoryController');
const {
  requireSignin,
  adminMiddleware,
} = require('../common-middleware/common');
const router = express.Router();
const Product = require('../models/productModel');

router.post('/product/create', requireSignin, adminMiddleware, (req, res) => {
  res.status(200).json({ message: 'Hello' });
});
// router.get('/product/getproduct', getCategories);

module.exports = router;
