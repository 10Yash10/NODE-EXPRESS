const { Router } = require("express");
const { rateLimit } = require("express-rate-limit");
const { register, login } = require("../../controllers/AuthController");
const { validate, registerSchema } = require("../middlewares/validation");

const route = Router();

const limitRate = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: "Too many requests, please try again later",
});

route.post("/register", validate(registerSchema), register);
route.post("/login", limitRate, login);

module.exports = route;
