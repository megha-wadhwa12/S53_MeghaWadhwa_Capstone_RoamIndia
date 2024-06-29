const { mongo } = require("mongoose");
const AttractionModel = require("./../Models/AttractionSchema");
const StateModel = require("./../Models/StateSchema");
const CityModel = require("../Models/CitySchema");
const axios = require("axios");

const DuckDuckGoImageSearch = async (Attraction_Name) => {
  const options = {
    method: "GET",
    url: "https://duckduckgo-image-search.p.rapidapi.com/search/image",
    params: { q: Attraction_Name },
    headers: {
      "x-rapidapi-key": "0b1df29a1dmsh64151f3c5b659f9p124e5ajsn77f7c6120674",
      "x-rapidapi-host": "duckduckgo-image-search.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const photos = response.data.results;
    const imageData = photos[1];
    if (!imageData) {
      res.status(404).json({ message: "Image not found" });
      throw new Error("Image data not found");
    }
    const imageUrl = imageData.image;
    let arrayPhotos = [];
    for (let i = 0; i < 30; i++) {
      const allPhotos = photos[i].image;
      if (!allPhotos) {
        res.status(404).json({ message: "Image not found" });
        throw new Error("Image data not found");
      }
      arrayPhotos.push(allPhotos);
      if (arrayPhotos.length === 30) {
        break; // Break the loop once we have 30 photos
      }
    }
    return { imageUrl, arrayPhotos }
  } catch (error) {
    console.error(error);
  }
};

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

const createAllAttractions = async (req, res) => {
  try {
    const {
      Attraction_Name,
      State_Name,
      City_Name,
      Image,
      Photos,
      Attraction_Description,
      Location,
      Attraction_Type,
      Things_To_Know,
      How_To_Get_There,
    } = req.body;

    const State = await StateModel.find({ State_Name }).exec();
    const StateId = State[0]._id;

    const City = await CityModel.find({ City_Name }).exec();
    const CityId = City[0]._id;

    const { imageUrl, arrayPhotos } = await DuckDuckGoImageSearch(Attraction_Name);
    const postAttraction = await AttractionModel.create({
      Attraction_Name,
      State: StateId,
      City: CityId,
      Image: imageUrl,
      Photos: arrayPhotos,
      Attraction_Description,
      Location,
      Attraction_Type,
      Things_To_Know,
      How_To_Get_There,
    });
    res.status(201).json({ message: "Create Attraction", postAttraction });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error adding an Attraction" });
    throw new error();
  }
};

const updateAttraction = async (req, res) => {
  try {
    const { cityName } = req.body;

    // Find the city based on cityName and state
    const cityFind = await CityModel.findOne({ City: null });

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
    await updateOneAttraction.populate("city").populate("state").execPopulate();

    res.status(200).json({
      message: "Updated and Populated Attraction",
      updateOneAttraction,
    });
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
