const User = require("../Model/User");

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
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (!user.length) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }
    res.status(200).json({ message: `Amjilttai newterlee`, user });
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
};
