const express = require('express');

const router = express.Router();
const admController = require('../controllers/adm.controller');

router.post('/', admController.createUserAdm);

module.exports = router;