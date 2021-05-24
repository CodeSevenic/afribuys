const express = require('express');
const {
  requireSignin,
  adminMiddleware,
} = require('../../common-middleware/common');
const { updateOrder } = require('../../controllers/admin/orderAdmin');
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);

module.exports = router;
