const express = require('express');
const {
  initialData,
} = require('../../controllers/admin/initialDataController');
const router = express.Router();

router.post('/initialdata', initialData);

module.exports = router;
