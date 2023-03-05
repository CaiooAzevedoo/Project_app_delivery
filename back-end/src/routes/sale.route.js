const express = require('express');

const router = express.Router();
const saleController = require('../controllers/sale.controller');
const validateMiddleware = require('../middlewares/validaToken.middleware');

router.post('/', validateMiddleware.validateToken, saleController.createSale);
router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);

module.exports = router;
