const User = require("../Model/User");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ message: "Amjilttai", users });
  } catch (error) {
    res.status(400).json({
      message: "Hereglegchdiin medeelliig awhad aldaa garlaa",
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Ner, email eswel nuuts ug hooson bn" });
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({ message: "Amjilttai butgegdlee", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Burtgel amjiltgui bolloo", error: error.message });
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai hereglegch oldsongui` });
  }

  try {
    const user = await User.findById(id);
    res.status(200).json({ message: `${id} IDtai hereglegch oldloo`, user });
  } catch (error) {
    res.status(400).json({ message: "Aldaa garlaa", error: error.message });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai hereglegch oldsongui` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json({
      message: `${id} IDtai hereglegchiin medeelel shinechlegdlee`,
      user,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Update Aldaa garlaa", error: error.message });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai hereglegch oldsongui` });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: `${id} IDtai hereglegch ustlaa`, user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Delete Aldaa garlaa", error: error.message });
  }
};
module.exports = { createUser, getAllUser, getUser, updateUser, deleteUser };
