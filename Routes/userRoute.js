const express = require("express");
const {
  login,
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const userRoute = express.Router();

userRoute.route("/login").post(login);

userRoute.route("/").post(createUser).get(getAllUser);

userRoute.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
module.exports = userRoute;
