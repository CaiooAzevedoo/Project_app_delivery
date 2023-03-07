const productService = require('../services/products.service');

const getAll = async (_req, res) => {
  const { type, allProduct } = await productService.getAll();
  return res.status(type).json(allProduct);
};

module.exports = {
  getAll,
};
