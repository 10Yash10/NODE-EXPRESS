const { loginService } = require("../services/authService");

const login = async (req, res, next) => {
  const user = req.body;

  try {
    const token = await loginService(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
