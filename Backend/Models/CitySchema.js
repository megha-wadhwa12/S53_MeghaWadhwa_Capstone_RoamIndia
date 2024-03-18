const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    Name: {type: String,required: [true, "Please add the Name of city"]},
    State_id: {type: String},
    Latitude: {type: String},
    Longitude: {type: String},
    Location: {type: String},
    Image: {type: String,required: [true, "Please add image link of the city"]},
    Description: {type: String,required: [true, "Please add the description about the city"]},
})

const CityModel  = mongoose.model("cityschema", citySchema)
module.exports = CityModel 