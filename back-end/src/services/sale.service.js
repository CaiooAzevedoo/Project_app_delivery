const { sale, saleProduct } = require('../database/models');
// const { createSaleProduct } = require('../services/saleProduct.service')
const { saleStatus } = require('../utils/status.util');

const createSaleProduct = async (saleId, productId, quantity) => {
  const response = await saleProduct.create({
    saleId,
    productId,
    quantity,
  });
  if (!response) throw new Error(400, 'Error');

  return { type: 201, message: response };
};

const createSale = async ({
  userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, products,
}) => {
  const result = await sale.create({
  userId,
  sellerId, 
  totalPrice, 
  deliveryAddress,
  deliveryNumber, 
  saleDate,
  status: saleStatus.PENDENTE,
  });

  if (!result) throw new Error(404, 'Sale not created');

  const salesProducts = products.map(async (product) => {
    await createSaleProduct(result.id, product.id, product.quantity);
  });
  await salesProducts;
  return { type: 201, message: result };
};

const getAll = async () => sale.findAll();

module.exports = {
  createSale,
  getAll,
};
