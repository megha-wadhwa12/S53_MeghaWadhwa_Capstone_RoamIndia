const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  images: [String],
  review: {type: String},
  State: { type: mongoose.Schema.Types.ObjectId, ref: "stateschemas" ,required: true},
  City: { type: mongoose.Schema.Types.ObjectId, ref: "cityschemas" ,required: true},
  Attraction: { type: mongoose.Schema.Types.ObjectId, ref: "attractionschemas" ,required: true},
  date: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 0 },
  visitedPlaceOn: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("reviewschemas", reviewSchema);

module.exports = ReviewModel;
