const express = require('express');
const {
  requireSignin,
  userMiddleware,
} = require('../common-middleware/common');
const { addItemToCart } = require('../controllers/cartController');
const router = express.Router();

router.post(
  '/user/cart/addtocart',
  requireSignin,
  userMiddleware,
  addItemToCart
);

module.exports = router;
