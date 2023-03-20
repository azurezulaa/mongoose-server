const Travel = require("../Model/Travel");

const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find({});
    res.status(201).json({ message: "Travels Amjilttai", travels });
  } catch (error) {
    res.status(400).json({
      message: "Aylaluudiin medeelliig awhad aldaa garlaa",
      error: error.message,
    });
  }
};

const createTravel = async (req, res) => {
  const { title, price, location, day, details, images } = req.body;

  if (!title || !price || !location) {
    res.status(400).json({ message: "Aylaliin medeelliig buren oruulna uu" });
  }
  try {
    const travel = await Travel.create({
      price,
      title,
      details,
      day,
      location,
      images,
    });
    res.status(201).json({ message: "Aylal Amjilttai butgegdlee", travel });
  } catch (error) {
    res.status(400).json({
      message: "Aylaliin burtgel amjiltgui bolloo",
      error: error.message,
    });
  }
};
const getTravel = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai aylal oldsongui` });
  }

  try {
    const travel = await Travel.findById(id);
    res.status(200).json({ message: `${id} IDtai aylal oldloo`, travel });
  } catch (error) {
    res.status(400).json({ message: "Aldaa garlaa", error: error.message });
  }
};
const updateTravel = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai aylal oldsongui` });
  }
  try {
    const travel = await Travel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: `${id} IDtai aylaliin medeelel shinechlegdlee`,
      travel,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "aylal Update Aldaa garlaa", error: error.message });
  }
};
const deleteTravel = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} IDtai aylal oldsongui` });
  }
  try {
    const travel = await Travel.findByIdAndDelete(id);
    res.status(200).json({ message: `${id} IDtai aylal ustlaa`, travel });
  } catch (error) {
    res
      .status(400)
      .json({ message: "aylal Delete Aldaa garlaa", error: error.message });
  }
};
Travel;
module.exports = {
  createTravel,
  getAllTravels,
  getTravel,
  updateTravel,
  deleteTravel,
};
