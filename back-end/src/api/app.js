const express = require('express');
const cors = require('cors');
const routes = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static('./public/images'));
app.use('/login', routes.loginRouter);
app.use('/register', routes.userRouter);
app.use('/products', routes.productRouter);
app.use('/sales', routes.saleRouter);
app.use('/saleproducts', routes.saleProducts);
app.use('/user', routes.userRouter);
app.use('/seller', routes.sellerRouter);
app.use('/adm', routes.admRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
