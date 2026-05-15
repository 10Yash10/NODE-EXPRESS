const { registerUser, loginUser } = require("../services/AuthService");

const register = async (req, res, next) => {
  const userData = req.body;
  try {
    const user = await registerUser(userData);

    return res.status(201).json({ status: "success", data: { id: user._id } });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const userData = req.body;

  try {
    const token = await loginUser(userData);

    return res.status(200).json({ status: "success", data: { token: token } });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
