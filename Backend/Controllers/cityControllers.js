const { mongo } = require("mongoose");
const CityModel = require("./../Models/CitySchema");
const StateModel = require("./../Models/StateSchema");
const axios = require("axios");

const duckDuckGo001 = async (City_Name) => {
  const options = {
    method: "GET",
    url: "https://duckduckgo10.p.rapidapi.com/search/images",
    params: {
      term: City_Name,
      safeSearch: "off",
      region: "in-en",
      offset: "30",
    },
    headers: {
      "X-RapidAPI-Key": "61a01a4182msh9243468b01ff47bp1003abjsnc6cc22e6f55a",
      "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const photos = response.data.data;
    console.log("photos", photos);
    const imageData = response.data.data[1];
    console.log("imageData", imageData);
    if (!imageData) {
      res.status(404).json({ message: "Image not found" });
      throw new Error("Image data not found");
    }
    const imageUrl = imageData.image;
    let arrayPhotos = [];
    for (let i = 0; i < 30; i++) {
      const allPhotos = photos[i].image;
      console.log("allPhotos", allPhotos);
      if (!allPhotos) {
        res.status(404).json({ message: "Image not found" });
        throw new Error("Image data not found");
      }
      arrayPhotos.push(allPhotos);
      if (arrayPhotos.length === 30) {
        break; // Break the loop once we have 30 photos
      }
    }
    console.log(imageUrl);
    return { imageUrl, arrayPhotos };
  } catch (error) {
    console.error(error);
  }
};

const getAllCities = async (req, res) => {
  try {
    const AllCities = await CityModel.find({}).populate("State");
    console.log("AllCities", AllCities);
    res.status(200).json(AllCities);
  } catch (error) {
    // console.log("error", error);
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
    console.log("State", StateId);

    const { imageUrl, arrayPhotos } = await duckDuckGo001(City_Name);
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
    console.log("error", error);
    res.status(500).json({ message: "Error adding a city" });
  }
};

module.exports = { getAllCities, createAllCities };
