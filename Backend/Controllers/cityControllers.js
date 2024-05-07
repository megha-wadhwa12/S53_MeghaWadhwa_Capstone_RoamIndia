const { mongo } = require("mongoose");
const CityModel = require("./../Models/CitySchema");
const StateModel = require("./../Models/StateSchema");
const axios = require('axios');


// const getImageFromDuckDuckGo = async(City_Name)=>{
//   const options = {
//     method: 'GET',
//     url: 'https://duckduckgo10.p.rapidapi.com/search/images',
//     params: {
//       term: City_Name,
//       safeSearch: 'off',
//       region: 'in-en'
//     },
//     headers: {
//       'X-RapidAPI-Key': '0b1df29a1dmsh64151f3c5b659f9p124e5ajsn77f7c6120674',
//       'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     const imageData = response.data.data[0]; // Access the first data object
//     if (!imageData) {
//       throw new Error('Image data not found');
//     }
//     const imageUrl = imageData.image; // Extract the image URL
//     return imageUrl;

//   } catch (error) {
//     console.error(error);
//     getImageFromGoogleAPI(City_Name)
//   }
// }

const getImageFromGoogleAPI = async(City_Name)=>{
  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://google-api31.p.rapidapi.com/imagesearch',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '0b1df29a1dmsh64151f3c5b659f9p124e5ajsn77f7c6120674',
      'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
    },
    data: {
      text: City_Name,
      safesearch: 'off',
      region: 'in-en',
      color: '',
      size: '',
      type_image: '',
      layout: '',
      max_results: 100
    }
  };
  
  try {
    const response = await axios.request(options);
    const imageData = response.data.result[1]; // Access the first data object
    if (!imageData) {
      throw new Error('Image data not found');
    }
    const imageUrl = imageData.image; // Extract the image URL
    return imageUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getAllCities = async (req, res) => {
  try {
    const AllCities = await CityModel.find({}).populate("State");
    console.log("AllCities", AllCities);
    res.status(200).json(AllCities);
  } catch (error) {
    console.log("error", error);
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
      City_Description,
      Iframe_Src,
      Popular_Attractions,
    } = req.body;

    const State = await StateModel.find({ State_Name }).exec();
    const StateId = State[0]._id;
    console.log("State", StateId);

    // const imageURL = await getImageFromDuckDuckGo(City_Name);
    const imageURL = await getImageFromGoogleAPI(City_Name);
    const postCity = await CityModel.create({
      City_Name,
      State : StateId,
      Latitude,
      Longitude,
      Image : imageURL,
      City_Description,
      Iframe_Src,
      Popular_Attractions,
    });
    res.status(201).json({ message: "Create City", postCity });

  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { getAllCities, createAllCities, getImageFromGoogleAPI };
