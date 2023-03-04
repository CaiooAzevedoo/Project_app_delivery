const saleService = require('../services/sale.service');
const saleProduct = require('../services/saleProduct.service');

const createSale = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products,
  } = req.body;
  const { type, message } = await saleService.createSale({ 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products,
  });
  return res.status(type).json(message);
};

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();

  return res.status(200).json(allSales);
};

const getAllSalesProducts = async (_req, res) => {
  const allSalesProducts = await saleProduct.getAll();

  return res.status(200).json(allSalesProducts);
};

module.exports = {
  createSale,
  getAll,
  getAllSalesProducts,
};
