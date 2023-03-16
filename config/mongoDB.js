const mongoose = require("mongoose");

const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("mongoDBtei holbogdloo");
  } catch (err) {
    console.log("mongoDBtei holbogdoh ued aldaa garlaa", err);
  }
};

module.exports = connectDB;
