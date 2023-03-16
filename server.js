const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/mongoDB");

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "SAIN UU" });
});

connectDB();
app.listen(PORT, () => {
  console.log("app server aslaa");
});
