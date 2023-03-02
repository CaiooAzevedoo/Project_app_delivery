const { product } = require('../database/models');

const getAll = async () => {
  const allProduct = await product.findAll();
  return { type: 200, allProduct };
};

module.exports = {
  getAll,
};
