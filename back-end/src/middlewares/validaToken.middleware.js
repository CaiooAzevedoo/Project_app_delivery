const jwt = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const verifyToken = jwt.validateToken(token);
  if (!verifyToken) { 
      return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
  return next();
};

module.exports = {
  validateToken,
};
