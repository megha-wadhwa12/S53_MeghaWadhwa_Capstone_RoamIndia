const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  UserName: { type: String, required: true },
  Rating: { type: Number, required: true },
  Images: [String],
  Review: {type: String},
  State: { type: mongoose.Schema.Types.ObjectId, ref: "stateschemas" ,required: true},
  City: { type: mongoose.Schema.Types.ObjectId, ref: "cityschemas" ,required: true},
  Attraction: { type: mongoose.Schema.Types.ObjectId, ref: "attractionschemas" ,required: true},
  Date: { type: Date, default: Date.now },
  UpVotes: { type: Number, default: 0 },
  VisitedPlaceOn: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("reviewschemas", reviewSchema);

module.exports = ReviewModel;
