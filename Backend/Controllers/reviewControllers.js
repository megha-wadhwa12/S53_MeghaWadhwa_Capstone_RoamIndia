const { mongo } = require("mongoose");
const ReviewModel = require("./../Models/ReviewSchema");
const CityModel = require("../Models/CitySchema");
const AttractionModel = require("../Models/AttractionSchema");
const StateModel = require("../Models/StateSchema");

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await ReviewModel.find({});
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching All Reviews" });
    throw new Error();
  }
};

const getOneReview = async (req, res) => {
  try {
    const OneReview = await ReviewModel.findById(req.params.id);
    res
      .status(200)
      .json({ message: `See Review for ${req.params.id}`, OneReview });
    if (!OneReview) {
      return res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching single Review" });
    throw new Error();
  }
};

const addReview = async (req, res) => {
  try {
    const {
      UserName,
      Rating,
      Images,
      Review,
      State_Name,
      City_Name,
      Attraction_Name,
      Date,
      UpVoted,
      VisitedPlaceOn,
    } = req.body;

    const State = await StateModel.find({ State_Name }).exec();
    const StateId = State[0]._id;

    const City = await CityModel.find({ City_Name }).exec();
    const CityId = City[0]._id;

    const Attraction = await AttractionModel.find({ Attraction_Name }).exec();
    const AttractionId = Attraction[0]._id;

    const postReview = await ReviewModel.create({
      UserName,
      Rating,
      Images,
      Review,
      State: StateId,
      City: CityId,
      Attraction: AttractionId,
      Date,
      UpVoted,
      VisitedPlaceOn,
    });
    res.status(201).json({ message: "Add Review", postReview });
  } catch (error) {
    res.status(500).json({ message: "Error adding a review" });
    throw new Error(error);
  }
};

const updateReviews = async (req, res) => {
  try {
    const updateReview = await ReviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Updated the review", updateReview });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Review" });
    throw new Error();
  }
};

module.exports = {
  getAllReviews,
  getOneReview,
  addReview,
  updateReviews,
};
