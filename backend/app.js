const express = require("express");
const app = express();

app.use(express.json());

// Route imports
const Product = require("./routes/ProductRoute");

app.use("/api/v2", Product);

module.exports = app;
