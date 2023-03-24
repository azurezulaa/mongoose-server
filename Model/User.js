const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн нэр оруулна уу"],
  },
  profileImg: String,
  email: {
    type: String,
    unique: true,
  },
  password: { type: String, select: false },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  phone: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
