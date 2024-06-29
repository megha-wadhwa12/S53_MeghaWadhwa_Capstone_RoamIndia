const { mongo } = require("mongoose");
const ReviewModel = require("./../Models/ReviewSchema");

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await ReviewModel.find({});
    console.log("allReviews", allReviews);
    res.status(200).json(allReviews);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching All Reviews" });
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
    console.log("error", error);
    res.status(500).json({ message: "Error fetching single Review" });
  }
};



module.exports = {
  getAllReviews,
  getOneReview,
};
