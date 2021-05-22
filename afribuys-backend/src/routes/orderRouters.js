const {
  requireSignin,
  userMiddleware,
} = require('../common-middleware/common');
const { addOrder, getOrders } = require('../controllers/orderController');

const router = require('express').Router();

router.post('/addOrder', requireSignin, userMiddleware, addOrder);
router.post('/getOrders', requireSignin, userMiddleware, getOrders);

module.exports = router;
