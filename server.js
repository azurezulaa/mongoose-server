const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/mongoDB");
const userRoute = require("./Routes/userRoute");
const catRoute = require("./Routes/catRoute");
const travelRoute = require("./Routes/travelRoute");
const upload = require("./middlewares/upload");
const cloudinary = require("./utils/cloudinary");
const error = require("./middlewares/error");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/categories", catRoute);
app.use("/travels", travelRoute);

app.get("/", async (req, res) => {
  res.json({ message: "SAIN UU" });
});

app.post("/upload", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.status(200).json({
    message: "Amjilttai upload hiigdlee",
    imgUrl: result.secure_url,
  });
});

app.use(error);

connectDB();

app.listen(PORT, () => {
  console.log("app server aslaa");
});
