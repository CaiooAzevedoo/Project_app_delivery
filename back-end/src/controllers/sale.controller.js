const saleService = require('../services/sale.service');

const createSale = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  } = req.body;
  const { type, message } = await saleService.createSale({ 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  });
  return res.status(type).json(message);
};

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();

  return res.status(200).json(allSales);
};

module.exports = {
  createSale,
  getAll,
};
