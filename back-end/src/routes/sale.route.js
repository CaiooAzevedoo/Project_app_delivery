const express = require('express');

const router = express.Router();
const saleController = require('../controllers/sale.controller');

router.post('/', saleController.createSale);
router.get('/', saleController.getAll);

module.exports = router;
