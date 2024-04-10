const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
    Name: {type: String,required: [true, "Please add the Name of State"]},
    Popular_Attractions: [{
        Name: String,
        Image: String,
        Attraction_Description: String,
        Location: String,
        Attraction_Type: String
    }],
    Iso2: {type: String, required: [true, "Please add the ISO2 code of the state"]},
    Latitude: {type: Number},
    Longitude: {type: Number},
    Image: {type: String,required: [true, "Please add image link of the State"]},
    Description: {type: String,required: [true, "Please add the description about the state"]},
    Iframe_Src: {type: String}

})

const StateModel  = mongoose.model("stateschema", stateSchema)

module.exports = StateModel