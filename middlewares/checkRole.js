const jwt = require("jsonwebtoken");

const checkRole = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(400).json({ message: "Token ywuulaagui baina" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (user.role !== "Admin") {
      res.status(400).json({ message: "Ene uildliig hiih erh hurehgui baina" });
    }
  } catch (err) {
    next();
  }
};
module.exports = checkRole;
