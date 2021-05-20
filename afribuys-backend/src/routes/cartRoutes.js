const express = require('express');
const {
  requireSignin,
  userMiddleware,
} = require('../common-middleware/common');
const {
  addItemToCart,
  getCartItems,
} = require('../controllers/cartController');
const router = express.Router();

router.post(
  '/user/cart/addtocart',
  requireSignin,
  userMiddleware,
  addItemToCart
);
router.post('/user/getCartItems', requireSignin, userMiddleware, getCartItems);

module.exports = router;
