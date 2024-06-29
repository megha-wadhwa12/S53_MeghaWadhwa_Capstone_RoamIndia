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

module.exports = {
  getAllStates,
  createState,
};
