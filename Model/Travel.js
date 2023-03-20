const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({
  title: String,
  images: String,
  details: String,
  price: Number,
  location: String,
  day: Number,
});
const Travel = mongoose.model("Travel", TravelSchema);
module.exports = Travel;
