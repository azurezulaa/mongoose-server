const express = require("express");
const {
  createTravel,
  getAllTravels,
  getTravel,
  updateTravel,
  deleteTravel,
} = require("../controller/travelController");

const router = express.Router();

router.route("/").get(getAllTravels).post(createTravel);
router.route("/:id").get(getTravel).put(updateTravel).delete(deleteTravel);

module.exports = router;
