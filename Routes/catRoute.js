const express = require("express");
const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/catController");

const catRoute = express.Router();

catRoute.route("/").post(createCategory).get(getAllCategories);

catRoute
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);
module.exports = catRoute;
