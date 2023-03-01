const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await userService.checkUser({ name, email });
  if (checkUser.type === 404) {
    return res.status(409).json({ message: 'Name or email already exist' });
  }
  if (checkUser.type === 200) {
    const { type, retorno } = await userService.createUser({ name, email, password });
    return res.status(type).json(retorno);
  }
};

module.exports = { createUser };
