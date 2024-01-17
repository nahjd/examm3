require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected MongoDb");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
