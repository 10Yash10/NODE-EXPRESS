const {
  getProducts,
  createProductService,
} = require("../services/ProductService");

const fetchAllProducts = async (req, res, next) => {
  try {
    const products = await getProducts();

    if (products == null)
      return res
        .status(200)
        .json({ status: "success", message: "No product found" });

    return res.status(200).json({ status: "success", data: products });
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const product = await createProductService(data);

    if (!product || product == null)
      return res
        .status(400)
        .json({ status: "success", message: "Unable to create product" });

    return res.status(200).json({
      status: "success",
      data: product,
      message: `${product.name} created successfully.`,
    });
  } catch (err) {
    // next(err);
  }
};

module.exports = {
  fetchAllProducts,
  createProduct,
};
