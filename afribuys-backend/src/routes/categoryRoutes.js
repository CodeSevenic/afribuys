const express = require('express');
const {
  requireSignin,
  adminMiddleware,
} = require('../common-middleware/common');
const {
  addCategory,
  getCategories,
} = require('../controllers/categoryController');
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router;
