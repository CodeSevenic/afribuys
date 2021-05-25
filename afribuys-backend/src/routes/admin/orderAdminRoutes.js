const express = require('express');
const {
  requireSignin,
  adminMiddleware,
} = require('../../common-middleware/common');
const {
  updateOrder,
  getCustomerOrder,
} = require('../../controllers/admin/orderAdmin');
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  adminMiddleware,
  getCustomerOrder
);

module.exports = router;
