const express = require('express');

const router = express.Router();
const loginController = require('../controllers/longin.controller');
const jwtUtil = require('../utils/jwt.util');

router.post('/', loginController.login);

router.get('/validate/:token', (req, res) => { 
    const { token } = req.params;
    const validToken = jwtUtil.validateToken(token);

    if (validToken) {
        return res.status(200).end();
    }
    return res.status(401).end();
});

module.exports = router;
