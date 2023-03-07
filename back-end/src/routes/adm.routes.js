const express = require('express');

const router = express.Router();
const admController = require('../controllers/adm.controller');
const validateMiddleware = require('../middlewares/validaToken.middleware');

router.post('/', validateMiddleware.validateToken, admController.createUserAdm);

module.exports = router;
