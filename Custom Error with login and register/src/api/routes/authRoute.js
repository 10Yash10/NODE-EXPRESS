const { Router } = require("express");
const { login } = require("../../controllers/authController");

const route = Router();

route.get("/login", login);

module.exports = route;
