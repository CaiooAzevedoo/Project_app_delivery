const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await userService.checkUser({ name, email });
  if (checkUser.type === 404) {
    return res.status(409).json({ message: 'Name or email already exist' });
  }
  if (checkUser.type === 200) {
    const { type, result } = await userService.createUser({ name, email, password });
    return res.status(type).json(result);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const message = await userService.getUserId(id);
  return res.status(200).json(message);
};

const getAll = async (_req, res) => {
  const allUsers = await userService.getAll();

  return res.status(200).json(allUsers);
};

const getSeller = async (_req, res) => {
  const allSellers = await userService.getSeller();

  return res.status(200).json(allSellers);
};

module.exports = { 
  createUser,
  getById,
  getAll,
  getSeller,
};
