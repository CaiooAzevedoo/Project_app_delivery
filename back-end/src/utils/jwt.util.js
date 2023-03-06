require('dotenv/config');
const jwt = require('jsonwebtoken');
const path = require('path');

const jwtKey = require('fs')
.readFileSync(path.resolve(__dirname, '../../jwt.evaluation.key'), { encoding: 'utf-8' });


const createToken = (data) => {
    const token = jwt.sign({ data }, jwtKey, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    console.log(jwtKey);
    return token;
};

const validateToken = (token) => {
    try {
        const validToken = jwt.verify(token, jwtKey);
        return validToken;
    } catch (error) {
        return false;
    }
};

const authenticateToken = (token) => {
  try {
    const validToken = jwt.verify(token, jwtKey);
    return validToken;
  } catch (err) {
    return false
  }
};

module.exports = {
    createToken, 
    validateToken,
    authenticateToken,
};
