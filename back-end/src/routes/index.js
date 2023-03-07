const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const productRouter = require('./products.routes');
const saleRouter = require('./sale.route');
const sellerRouter = require('./role.route');
const saleProducts = require('./saleProducts.route');
const admRouter = require('./adm.routes');

module.exports = {
  loginRouter,
  userRouter,
  productRouter,
  saleRouter,
  sellerRouter,
  saleProducts,
  admRouter,
};
