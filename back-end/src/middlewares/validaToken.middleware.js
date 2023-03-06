const jwtUtil = require('../utils/jwt.util');

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  const verifyToken = jwtUtil.authenticateToken(token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  if (!verifyToken) { 
      return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
  return next();
};

module.exports = {
  validateToken,
};
