const md5 = require('md5');
const { Op } = require('sequelize');
const { user } = require('../database/models');
const jwtUtil = require('../utils/jwt.util');

const checkUser = async ({ name, email }) => {
  const check = await user.findOne({
    where: {
      [Op.and]: [
        { name },
        { email },
      ],
    },
  });

  if (check) {
    return { type: 404 };
  }

  return { type: 200 };
};

const createUser = async ({ name, email, password }) => {
  const safePassword = md5(password);
  const create = await user.create({
    name,
    email,
    password: safePassword,
  });

 
  const token = jwtUtil.createToken(safePassword);
  const result = { 
    id: create.id,
    name: create.name,
    email: create.email,
    password: token,
  }
  return { type: 201, result };
};

const getUserId = (id) => user.findOne({
  where: { id },
});

const getSeller = () => user.findAll({
  where: { role: 'seller' },
});

const getAll = async () => user.findAll();

module.exports = {
 checkUser,
 createUser,
 getUserId,
 getAll,
 getSeller,
};
