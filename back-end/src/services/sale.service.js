const { sale } = require('../database/models/sales');
const { saleStatus } = require('../utils/status.util');

const createSale = async ({
userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate,
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

  return { type: 201, message: result };
};

module.exports = {
  createSale,
};

