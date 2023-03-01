const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = loginService.validaBody(req.body);
  const check = await loginService.validaLogin({ email, password });
  if (check.type === 404) {
    return res.status(404).json({ message: 'Email or password is invalid' });
  }
  return res.status(200).json(check);
};

module.exports = {
  login,
};
