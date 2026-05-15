const { Router } = require("express");
const authenticateToken = require("../middlewares/authenticateToken");
const {
  fetchAllProducts,
  createProduct,
} = require("../../controllers/ProductController");

const route = Router();

route.get("/", authenticateToken, fetchAllProducts);
route.post("/", authenticateToken, createProduct);

module.exports = route;
