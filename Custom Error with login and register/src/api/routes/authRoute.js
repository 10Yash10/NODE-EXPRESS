const { Router } = require("express");
const { login, register } = require("../../controllers/authController");

const route = Router();

route.post("/register", register);
route.post("/login", login);

module.exports = route;
