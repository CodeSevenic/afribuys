const express = require('express');
const { signup, signin } = require('../controllers/authController');
const {
  validateSignupRequest,
  isRequestValidated,
  validateSignInRequest,
} = require('../validators/authValidators');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSignInRequest, isRequestValidated, signin);

// router.post('/profile', requireSignin, (req, res) => {
//   res.status(200).json({ user: 'profile' });
// });

module.exports = router;
