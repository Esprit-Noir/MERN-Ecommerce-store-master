const mongoose = require("mongoose");

const DBConnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Database connection succesfully with server ${data.connection.host}`
      );
    });
};

module.exports = DBConnection;
