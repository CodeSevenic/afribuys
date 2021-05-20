const express = require('express');
const {
  requireSignin,
  userMiddleware,
} = require('../common-middleware/common');
const { addAddress, getAddress } = require('../controllers/addressController');
const router = express.Router();

router.post('/user/address/create', requireSignin, userMiddleware, addAddress);
router.post('/user/getaddress', requireSignin, userMiddleware, getAddress);

module.exports = router;
