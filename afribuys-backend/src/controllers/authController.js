const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        message: 'User already registered',
      });

    const { name, surname, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);

    const _user = new User({
      name,
      surname,
      email,
      hash_password,
      username: Math.random().toString(),
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: 'Something went wrong!',
        });
      }

      if (data) {
        return res.status(201).json({
          user: 'Account created successfully...!',
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: '1d',
          }
        );
        const { _id, name, surname, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            name,
            surname,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: 'Invalid user email or Password',
        });
      }
    } else {
      return res.status(400).json({ message: 'Something went wrong!' });
    }
  });
};
