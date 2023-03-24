const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { options } = require("../Routes/userRoute");

const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл олдлоо.", users });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { name, email, password, profileImg } = req.body;

  try {
    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: "Нэр, имэйл эсвэл нууц үг хоосон байна" });
    }
    const user = await User.create({
      name,
      email,
      password,
      profileImg,
    });
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ", user });
  } catch (error) {
    next(error);
  }
};
const getUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй хэрэглэгч олдлоо`, user });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай хэрэглэгчийн мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй хэрэглэгч устгагдлаа`, user });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }
    const checkPass = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPass) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }
    const { name, _id, email, role } = user;
    const token = jwt.sign(
      { _id, name, email, role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 1200,
      }
    );
    res.status(200).json({ message: `Amjilttai newterlee`, user, token });
  } catch (error) {
    next(error);
  }
  console.log("amjilttai login hiilee");
};

const register = async (req, res, next) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, user });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  login,
  register,
};
