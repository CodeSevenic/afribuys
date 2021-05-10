const express = require('express');
const { requireSignin } = require('../../common-middleware/common');
const router = express.Router();
const { signup, signin } = require('../../controllers/admin/authController');
const {
  validateSignupRequest,
  isRequestValidated,
  validateSignInRequest,
} = require('../../validators/authValidators');

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/admin/signout', requireSignin, signout);

module.exports = router;
