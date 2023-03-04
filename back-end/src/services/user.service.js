const md5 = require('md5');
const { user } = require('../database/models');

const checkUser = async ({ name, email }) => {
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

const createUser = async ({ name, email, password }) => {
  const safePassword = md5(password);
  const result = await user.create({
    name,
    email,
    password: safePassword,
  });

  return { type: 201, result };
};

const getUserId = (id) => user.findOne({
  where: { id },
});

const getSeller= () => user.findAll({
  where: { role: "seller" },
});

const getAll = async () => user.findAll();

module.exports = {
 checkUser,
 createUser,
 getUserId,
 getAll,
 getSeller,
};
