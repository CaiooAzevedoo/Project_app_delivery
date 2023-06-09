const express = require('express');

const router = express.Router();
const saleController = require('../controllers/sale.controller');
const validateMiddleware = require('../middlewares/validaToken.middleware');

router.post('/', validateMiddleware.validateToken, saleController.createSale);
router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);
router.get('/seller/:id', saleController.getAllBySellerId);
router.get('/user/:id', saleController.getAllByUserId);
router.patch('/:id/status', saleController.updateStatus);

module.exports = router;
