const User = require("../models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const registerUser = async (data) => {
  const { firstName, lastName, email, password, contactInformation } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) throw new Error("User already exists.");

  return await User.create({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password,
    contact_information: contactInformation,
  });
};

const loginUser = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await argon2.verify(user.password, password))) {
    throw new Error("Invalid credentials");
  }

  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
