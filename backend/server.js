const app = require("./app");
const dotenv = require("dotenv");
const DBConnection = require("./db/Database");

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handling uncaught Exception`);
});

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

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
