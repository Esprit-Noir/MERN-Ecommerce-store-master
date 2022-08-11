const app = require("./app");
const dotenv = require("dotenv");
const DBConnection = require("./db/Database");
//config
dotenv.config({
  path: "backend/config/.env",
});

const PORT = process.env.PORT || 3500;

// Database connection
DBConnection();

//Create a server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
