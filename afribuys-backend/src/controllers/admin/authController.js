const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: 'Admin already registered',
      });

    const { name, surname, email, password } = req.body;
    const _user = new User({
      name,
      surname,
      email,
      password,
      username: Math.random().toString(),
      role: 'admin',
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: 'Something went wrong!',
        });
      }

      if (data) {
        return res.status(201).json({
          user: 'Admin created successfully...!',
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password) && user.role === 'admin') {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
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
          message: 'Invalid email or Password',
        });
      }
    } else {
      return res.status(400).json({ message: 'Something went wrong!' });
    }
  });
};
