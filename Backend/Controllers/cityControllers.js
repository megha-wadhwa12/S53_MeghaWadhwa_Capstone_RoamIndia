const { mongo } = require("mongoose");
const CityModel = require("./../Models/CitySchema");
const StateModel = require("./../Models/StateSchema");
const axios = require("axios");

// const googleAPI001 = async (City_Name) => {
//   const axios = require("axios");

//   const options = {
//     method: "POST",
//     url: "https://google-api31.p.rapidapi.com/imagesearch",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "61a01a4182msh9243468b01ff47bp1003abjsnc6cc22e6f55a",
//       "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
//     },
//     data: {
//       text: City_Name,
//       safesearch: "off",
//       region: "in-en",
//       color: "",
//       size: "",
//       type_image: "",
//       layout: "",
//       max_results: 30,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     const photos = response.data.result;
//     const imageData = response.data.result[1];
//     if (!imageData) {
//       res.status(404).json({ message: "Image not found" });
//       throw new Error("Image data not found");
//     }
//     const imageUrl = imageData.image;
//     let arrayPhotos = [];
//     if (photos.length == 30) {
//       photos.forEach((e) => {
//         const allPhotos = e.image;
//         console.log("allPhotos", allPhotos);
//         if (!allPhotos) {
//           res.status(404).json({ message: "Image not found" });
//           throw new Error("Image data not found");
//         }
//         arrayPhotos.push(allPhotos);
//       });
//     } else {
//       console.log("Length of photos is less");
//     }
//     console.log(imageUrl);
//     return { imageUrl, arrayPhotos };
//   } catch (error) {
//     console.error(error);
//   }
// };

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
    // if (photos.length == 30) {
    //   photos.forEach((e) => {
    //     const allPhotos = e.image;
    //     console.log("allPhotos", allPhotos);
    //     if (!allPhotos) {
    //       res.status(404).json({ message: "Image not found" });
    //       throw new Error("Image data not found");
    //     }
    //     arrayPhotos.push(allPhotos);
    //   });
    // } else {
    //   console.log("Length of photos is less/more than 30");
    // }
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


module.exports = { getAllCities, createAllCities };
