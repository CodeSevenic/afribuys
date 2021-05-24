const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');

exports.addOrder = (req, res) => {
  Cart.deleteOne({ user: req.user._id }).exec((error, result) => {
    if (error) return res.status(400).json({ error });
    if (result) {
      req.body.user = req.user._id;
      req.body.orderStatus = [
        {
          type: 'ordered',
          date: new Date(),
          isCompleted: true,
        },
        {
          type: 'packed',
          isCompleted: false,
        },
        {
          type: 'shipped',
          isCompleted: false,
        },
        {
          type: 'delivered',
          isCompleted: false,
        },
      ];
      const order = new Order(req.body);
      order.save((error, orders) => {
        if (error) return res.status(400).json({ error });
        if (orders) {
          res.status(201).json({ orders });
        }
      });
    }
  });
};

exports.getOrders = (req, res) => {
  Order.find({ user: req.user._id })
    .select('_id paymentStatus items')
    .populate('items.productId', '_id name productPictures')
    .exec((error, orders) => {
      if (error) return res.status(400).json({ error });
      if (orders) {
        res.status(200).json({ orders });
      }
    });
};
