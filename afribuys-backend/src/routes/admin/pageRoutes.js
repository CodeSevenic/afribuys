const express = require('express');
const {
  upload,
  requireSignin,
  adminMiddleware,
} = require('../../common-middleware/common');
const { createPage } = require('../../controllers/admin/pageController');
const router = express.Router();

router.post(
  '/page/create',
  requireSignin,
  adminMiddleware,
  upload.fields([{ name: 'banners' }, { name: 'products' }]),
  createPage
);

module.exports = router;
