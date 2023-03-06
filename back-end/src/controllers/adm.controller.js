const admService = require('../services/adm.service');

const createUserAdm = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);
  const checkUser = await admService.checkUserAdm({ name, email });
  if (checkUser.type === 404) {
    return res.status(409).json({ message: 'Name or email already exist' });
  }
  if (checkUser.type === 200) {
    const { type, result } = await admService.createUserAdm({ name, email, password, role });
    return res.status(type).json(result);
  }
};

module.exports = { createUserAdm };