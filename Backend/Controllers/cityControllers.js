const { mongo } = require("mongoose");
const CityModel = require("./../Models/CitySchema");
const StateModel = require("./../Models/StateSchema");
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
    throw new Error();
  }
};

const getAllCities = async (req, res) => {
  try {
    const AllCities = await CityModel.find({}).populate("State");
    res.status(200).json(AllCities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching All Cities" });
  }
};

const createAllCities = async (req, res) => {
  try {
    const {
      City_Name,
      State_Name,
      Latitude,
      Longitude,
      Image,
      Photos,
      City_Description,
      Iframe_Src,
      Popular_Attractions,
    } = req.body;

    const State = await StateModel.find({ State_Name }).exec();
    const StateId = State[0]._id;

    const { imageUrl, arrayPhotos } = await DuckDuckGoImageSearch(City_Name);
    const postCity = await CityModel.create({
      City_Name,
      State: StateId, 
      Latitude,
      Longitude,
      Image: imageUrl,
      Photos: arrayPhotos,
      City_Description,
      Iframe_Src,
      Popular_Attractions,
    });
    res.status(201).json({ message: "Create City", postCity });
  } catch (error) {
    res.status(500).json({ message: "Error adding a city" });
    throw new Error();
  }
};

const updateCities = async (req, res) => {
  try {
    const updateCity = await CityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Updated the City", updateCity });
  } catch (error) {
    res.status(500).json({ message: "Error Updating City" });
    throw new Error();
  }
};

module.exports = { getAllCities, createAllCities, updateCities };
