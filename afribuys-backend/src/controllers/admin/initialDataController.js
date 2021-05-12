const Category = require('../../models/categoryModel');
const Product = require('../../models/productModel');

exports.initialData = async (req, res) => {
  const categories = await Category.find({}).exec();
  const products = await Product.find({})
    .select('_id name price description quantity slug productPictures category')
    .exec();

  res.status(200).json({
    categories,
    products,
  });
};
