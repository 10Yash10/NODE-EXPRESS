const Product = require("../models/Product");

const getProducts = async () => {
  try {
    const products = await Product.find();

    if (products == null || products.length == 0 || !products) return null;

    return products;
  } catch (err) {
    throw new Error("Failed to fetch products");
  }
};

const createProductService = async (product) => {
  if (!product) return null;
  return await Product.create({
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  });
};

module.exports = {
  getProducts,
  createProductService,
};
