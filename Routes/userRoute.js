const express = require("express");
const {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.route("/").post(createUser).get(getAllUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
