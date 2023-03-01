const Joi = require('joi');
const md5 = require('md5');
const jwtUtil = require('../utils/jwt.util');
const { user } = require('../database/models');

const validaBody = (infos) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(infos);
  if (error) throw error;

  return value;
};

const validaLogin = async ({ email, password }) => {
  const client = await user.findOne({
    where: { email },
  });

  const safePassword = md5(password);
  if (!client || client.password !== safePassword) {
    return { type: 404 };
  }

  const userSafe = client.dataValues;
  const { password: _, ...lassPasword } = userSafe;
  const token = jwtUtil.createToken(lassPasword);

  return { id: client.id, name: client.name, email: client.email, role: client.role, token };
};

module.exports = {
  validaBody,
  validaLogin,
};
