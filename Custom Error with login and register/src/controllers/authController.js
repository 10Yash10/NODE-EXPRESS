const { loginService, registerService } = require("../services/authService");

const register = async (req, res, next) => {
  const user = req.body;

  try {
    const createdUser = await registerService(user);
    return res.status(200).json({
      status: "success",
      message: `${user.email} created successfully`,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const user = req.body;

  try {
    const token = await loginService(user);
    return res
      .status(200)
      .json({ status: "success", message: "login successfull", token: token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
