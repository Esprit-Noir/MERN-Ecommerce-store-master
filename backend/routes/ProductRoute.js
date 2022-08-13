const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/ProductController");
const Router = express.Router();

Router.route("/product/new").post(createProduct);
Router.route("/products").get(getAllProducts);
Router.route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = Router;
