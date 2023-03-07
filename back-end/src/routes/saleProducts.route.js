const express = require('express');

const router = express.Router();
const saleController = require('../controllers/sale.controller');

router.get('/', saleController.getAllSalesProducts);

module.exports = router;
