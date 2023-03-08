const saleService = require('../services/sale.service');
const saleProduct = require('../services/saleProduct.service');

const createSale = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products,
  } = req.body;
  try {
    const { type, message } = await saleService.createSale({ 
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products,
    });
    return res.status(type).json(message);
  } catch (err) {
    return res.status(404).json({ message: 'Sale err' });
  }
};

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();

  return res.status(200).json(allSales);
};

const getAllByUserId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.getAllByUserId(id);

  return res.status(type).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.getById(id);

  return res.status(type).json(message);
};

const getAllSalesProducts = async (_req, res) => {
  const allSalesProducts = await saleProduct.getAll();

  return res.status(200).json(allSalesProducts);
};

module.exports = {
  createSale,
  getAll,
  getAllSalesProducts,
  getById,
  getAllByUserId,
};
