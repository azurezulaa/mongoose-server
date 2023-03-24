const express = require("express");
const {
  register,
  login,
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const checkRole = require("../middlewares/checkRole");
const userRoute = express.Router();

userRoute.route("/login").post(login);

userRoute.route("/register").post(register);

userRoute.route("/").post(checkRole, createUser).get(checkRole, getAllUser);

userRoute.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRoute;
