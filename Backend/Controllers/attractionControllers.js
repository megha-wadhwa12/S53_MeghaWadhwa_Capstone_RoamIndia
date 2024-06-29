const { mongo } = require("mongoose");
const AttractionModel = require("./../Models/AttractionSchema");
const StateModel = require("./../Models/StateSchema");
const CityModel = require("../Models/CitySchema");
const axios = require("axios");

const getAllAttractions = async (req, res) => {
  try {
    const allAttractions = await AttractionModel.find({})
      .populate("State")
      .populate("City");
    console.log("allAttractions", allAttractions);
    res.status(200).json(allAttractions);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Attractions" });
  }
};



const updateAttraction = async (req, res) => {
  try {
    const { cityName } = req.body;

    // Find the city based on cityName and state
    const cityFind = await CityModel.findOne({ City: null});

    if (!cityFind) {
      return res.status(404).json({ message: "Null City not found" });
    }

    // Update the attraction with the city ID
    const updateData = { ...req.body, city: city._id };

    const updateOneAttraction = await AttractionModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updateOneAttraction) {
      return res.status(404).json({ message: "Attraction not found" });
    }

    // Populate the necessary fields
    await updateOneAttraction.populate('city').populate('state').execPopulate();

    res.status(200).json({ message: "Updated and Populated Attraction", updateOneAttraction });
  } catch (error) {
    console.log("Error updating attraction:", error);
    res.status(500).json({ message: "Error updating attraction", error });
  }
};


module.exports = {
  getAllAttractions,
  createAllAttractions,
  updateAttraction,
};
