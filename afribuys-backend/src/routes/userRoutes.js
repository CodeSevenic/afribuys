const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/userController');

router.post('/signup', signup);
router.post('/signin', (req, res) => {});

module.exports = router;
