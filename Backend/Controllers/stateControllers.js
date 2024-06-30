const { mongo } = require("mongoose");
const StateModel = require("./../Models/StateSchema");

const getAllStates = async (req, res) => {
  try {
    const allStates = await StateModel.find({});
    console.log("allStates", allStates);
    res.status(200).json(allStates);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All States" });
  }
};

const getOneState = async (req, res) => {
  try {
    const OneState = await StateModel.findById(req.params.id);
    res
      .status(200)
      .json({ message: `See State for ${req.params.id}`, OneState });
    if (!OneState) {
      return res.status(404).json({ message: "State not found" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single State" });
  }
};

const updateStates = async (req, res) => {
  try {
    const updateState = await StateModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Updated the State", updateState });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error Updating State" });
  }
};

module.exports = {
  getAllStates,
  getOneState,
  updateStates
};
