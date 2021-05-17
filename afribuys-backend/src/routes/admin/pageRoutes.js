const express = require('express');
const { upload } = require('../../common-middleware/common');
const { createPage } = require('../../controllers/admin/pageController');
const router = express.Router();

router.post(
  '/page/create',
  upload.fields([{ name: 'banners' }, { name: 'products' }]),
  createPage
);

module.exports = router;
