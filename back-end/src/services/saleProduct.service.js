const { saleProduct } = require('../database/models');

const createSaleProduct = async (saleId, productId, quantity) => {
  const response = await saleProduct.create({
    saleId,
    productId,
    quantity,
  });

  return { type: 201, message: response };
};

const getAll = async () => saleProduct.findAll();

module.exports = {
  createSaleProduct,
  getAll,
};
