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
    return { imageUrl, arrayPhotos };
  } catch (error) {
    throw new Error(error);
  }
};

const getAllAttractions = async (req, res) => {
  try {
    const allAttractions = await AttractionModel.find({})
      .populate("State")
      .populate("City");
    res.status(200).json(allAttractions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching All Attractions" });
    throw new Error();
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

    const { imageUrl, arrayPhotos } = await DuckDuckGoImageSearch(
      Attraction_Name
    );
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
    res.status(500).json({ message: "Error adding an Attraction" });
    throw new Error();
  }
};

const updateAttractions = async (req, res) => {
  try {
    const updateAttraction = await AttractionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Updated the Attraction", updateAttraction });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Attraction" });
    throw new Error();
  }
};

const photosAdd = async (req, res) => {
  try {
    const { Attraction_Name } = req.body;

    const { arrayPhotos } = await DuckDuckGoImageSearch(Attraction_Name);

    const updateAttraction = await AttractionModel.findByIdAndUpdate(
      req.params.id,
      { Photos: arrayPhotos },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Updated the Attraction", updateAttraction });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Attraction" });
    throw new Error();
  }
};

module.exports = {
  getAllAttractions,
  createAllAttractions,
  updateAttractions,
  photosAdd,
};
