const express = require('express');
const cors = require('cors');
const routes = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', routes.loginRouter);
app.use('/register', routes.userRouter);
app.use('/products', routes.productRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
