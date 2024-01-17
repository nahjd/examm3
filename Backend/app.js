const express = require("express");
const app = express();
const port = process.env.MONGODB_URI || 5050;
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./src/router/routes");

require("dotenv").config();
require("./src/config/db");

app.use(cors());
app.use(bodyParser.json());
app.use("/", Router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
