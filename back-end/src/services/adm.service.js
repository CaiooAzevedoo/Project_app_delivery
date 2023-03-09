const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../database/models');

const checkUserAdm = async ({ name, email }) => {
  const checkName = await user.findOne({
    where: { name },
  });
  const checkEmail = await user.findOne({
    where: { email },
  });

  if (checkName || checkEmail) {
    return { type: 404 };
  }

  return { type: 200 };
};

const createUserAdm = async ({ name, email, password, role }) => {
  const safePassword = md5(password);
  const result = await user.create({
    name,
    email,
    password: safePassword,
    role,
  });

  return { type: 201, result };
};

const getUsers = async () => user.findAll({
  where: { role: {
    [Op.or]: ['seller', 'customer'] },
} });

module.exports = {
 checkUserAdm,
 createUserAdm,
 getUsers,
};
