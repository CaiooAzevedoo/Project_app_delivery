require('dotenv/config');
const jwt = require('jsonwebtoken');
const path = require('path');

const secret = require('fs')
.readFileSync('jwt.evaluation.key');

const createToken = (data) => {
    const token = jwt.sign({ data }, secret, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    return token;
};

const validateToken = (token) => {
    try {
        const validToken = jwt.verify(token, secret);
        return validToken;
    } catch (error) {
        return false;
    }
};

module.exports = {
    createToken, 
    validateToken,
};
