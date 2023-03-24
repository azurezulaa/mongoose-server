const Travel = require("../Model/Travel");

const getAllTravels = async (req, res, next) => {
  try {
    const travels = await Travel.find();
    if (!travels) {
      res.status(200).json({ message: "Аяллуудын мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Аяллуудын мэдээлэл олдлоо.", travels });
  } catch (error) {
    next(error);
  }
};

const createTravel = async (req, res, next) => {
  const {
    title,
    desctiption,
    travelImg,
    travelPrice,
    travelDay,
    travelLocation,
    category,
  } = req.body;

  try {
    const travel = await Travel.create({
      title,
      desctiption,
      travelImg,
      travelPrice,
      travelDay,
      travelLocation,
      category,
    });
    res.status(201).json({ message: "Амжилттай үүсгэлээ", travel });
  } catch (error) {
    next(error);
  }
};
const getTravel = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const travel = await Travel.findById(id);
    if (!travel) {
      res.status(400).json({ message: `${id} ID-тэй аялал олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй аялал олдлоо`, travel });
  } catch (error) {
    next(error);
  }
};
const updateTravel = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const travel = await Travel.findByIdAndUpdate(id, req.body, { new: true });
    if (!travel) {
      res.status(400).json({ message: `${id} ID-тэй аялал олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай аяллын мэдээлэл шинэчлэгдлээ`,
      travel,
    });
  } catch (error) {
    next(error);
  }
};
const deleteTravel = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const travel = await Travel.findByIdAndDelete(id);
    if (!travel) {
      res.status(400).json({ message: `${id} ID-тэй аялал олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй аялал устгагдлаа`, travel });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTravel,
  getAllTravels,
  getTravel,
  updateTravel,
  deleteTravel,
};
