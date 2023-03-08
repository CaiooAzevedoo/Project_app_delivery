const { sale, salesProduct, product, user } = require('../database/models');

const { saleStatus } = require('../utils/status.util');

const createSaleProduct = async (saleId, productId, quantity) => {
  const response = await salesProduct.create({
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

  const salesProducts = products.map(async (itens) => {
    await createSaleProduct(result.id, itens.id, itens.quantity);
  });
  await salesProducts;
  return { type: 201, message: result };
};

const getAll = async () => sale.findAll(
 { include: [
    { model: product, as: 'products', through: { attributes: ['quantity'] } },
    { model: user, as: 'seller', attributes: ['name'] },
  ] },
);

const getAllByUserId = async (id) => {
  const result = await sale.findAll({   
      where: { userId: id },
      include: [
       { model: product, as: 'products', through: { attributes: ['quantity'] } },
       { model: user, as: 'seller', attributes: ['name'] },
     ], 
    });
    if (!result) {
      return { type: 404, message: 'User dont have a sale registred' };
    }
    return { type: 200, message: result };
};

const getById = async (id) => {
  const result = await sale.findOne({
  where: { id },
  include: [
    { model: product, as: 'products', through: { attributes: ['quantity'] } },
    { model: user, as: 'seller', attributes: ['name'] },
  ],
});
  if (!result) {
    return { type: 404, message: 'Unregistered sale' };
  }
  return { type: 200, message: result };
};

module.exports = {
  createSale,
  getAll,
  getById,
  getAllByUserId,
};
