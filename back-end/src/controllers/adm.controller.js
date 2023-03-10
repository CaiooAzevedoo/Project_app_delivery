const admService = require('../services/adm.service');
const userService = require('../services/user.service');

const createUserAdm = async (req, res) => {
  const { name, email, password, role } = req.body;
  const checkUser = await userService.checkUser({ name, email });
  if (checkUser.type === 404) {
    return res.status(409).json({ message: 'Name or email already exist' });
  }
  if (checkUser.type === 200) {
    const { type, result } = await admService.createUserAdm({ name, email, password, role });
    return res.status(type).json(result);
  }
  return res.status(404);
};

const getUsers = async (_req, res) => {
  const result = await admService.getUsers();

  return res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  await admService.deletUser(id);

  return res.status(200).end('User has been destroyed');
};

module.exports = { 
  createUserAdm,
  getUsers,
  deleteUser,
 };
