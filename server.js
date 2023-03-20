const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");

dotenv.config();

const connectDB = require("./config/mongoDB");
const userRoute = require("./Routes/userRoute");
const travelRoute = require("./Routes/travelRoute");

const PORT = process.env.PORT;
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(express.json());
app.use("/users", userRoute);
app.use("/travels", travelRoute);

app.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({ message: "Amjilttai upload hiigdlee" });
});

app.get("/", (req, res) => {
  res.json({ message: "SAIN UU" });
});

connectDB();
app.listen(PORT, () => {
  console.log("app server aslaa");
});
