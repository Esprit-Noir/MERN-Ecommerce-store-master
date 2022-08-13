const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
app.use(express.json());

// Route imports
const Product = require("./routes/ProductRoute");

app.use("/api/v2", Product);

app.use(ErrorHandler);

module.exports = app;
