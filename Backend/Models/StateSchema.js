const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
    State_Name: {type: String,required: [true, "Please add the Name of State"]},
    State_Code: {type: String,required: [true,"Please add state code"]},
    Popular_Attractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'attractionschemas'
    }],
    Image: {type: String,required: [true, "Please add image link of the State"]},
    Description: {type: String,required: [true, "Please add the description about the state"]}
    
})

const StateModel  = mongoose.model("stateschemas", stateSchema)

module.exports = StateModel