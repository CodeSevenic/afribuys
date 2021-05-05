const { validationResult, check } = require('express-validator');

exports.validateSignupRequest = [
  check('name').notEmpty().withMessage('First Name is required'),
  check('surname').notEmpty().withMessage('Last Name is required'),
  check('email').isEmail().withMessage('Valid Email is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

exports.validateSignInRequest = [
  check('email').isEmail().withMessage('Valid Email is required'),
  check('password').notEmpty().withMessage('Incorrect password'),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  next();
};
