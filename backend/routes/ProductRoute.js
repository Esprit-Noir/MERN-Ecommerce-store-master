const express = require("express");
const { getAllProducts } = require("../controllers/ProductController");
const Router = express.Router();

Router.route("/products").get(getAllProducts);

module.exports = Router;
