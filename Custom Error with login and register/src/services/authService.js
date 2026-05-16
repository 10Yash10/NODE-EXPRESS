const mongoose = require("mongoose");
const User = require("../models/User");
const { InvalidUserError } = require("../errors/customError");
const jwt = require("jsonwebtoken");

const loginService = async (user) => {
  const email = user.email;
  const password = user.password;

  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser) {
    throw new InvalidUserError("No User Found");
  } else if (password !== existingUser.password) {
    throw new InvalidUserError("Wrong Password");
  } else {
    return jwt.sign({ id: existingUser.id }, "super-secret-key-2026", {
      expiresIn: "5m",
    });
  }
};

module.exports = {
  loginService,
};
