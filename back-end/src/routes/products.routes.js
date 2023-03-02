const express = require('express');

const router = express.Router();
const producsController = require('../controllers/product.controller');

router.get('/', producsController.getAll);

module.exports = router;
