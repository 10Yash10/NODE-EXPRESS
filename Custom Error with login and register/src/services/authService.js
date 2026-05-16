const mongoose = require("mongoose");
const User = require("../models/User");
const {
  InvalidUserError,
  ValidationError,
  AuthenticationFailed,
} = require("../errors/customError");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const loginService = async (user) => {
  const email = user.email;
  const password = user.password;

  const existingUser = await User.findOne({ email }).select("+password");

  if (!existingUser) {
    throw new InvalidUserError("No User Found");
  } else if (!user || !(await argon2.verify(existingUser.password, password))) {
    throw new AuthenticationFailed("Wrong Password");
  } else {
    return jwt.sign({ id: existingUser.id }, "super-secret-key-2026", {
      expiresIn: "5m",
    });
  }
};

const registerService = async (user) => {
  const email = user.email;
  const exisitingUser = await User.findOne({ email });

  if (exisitingUser) throw new ValidationError("User Already Exists");

  const newUser = new User({
    email: user.email,
    password: user.password,
    type: user.type,
  });

  await newUser.save();

  // another way of creating is by either User.create() or by insertOne().

  return newUser;
};

module.exports = {
  registerService,
  loginService,
};
