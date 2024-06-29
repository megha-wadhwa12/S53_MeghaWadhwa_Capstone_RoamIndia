const express = require("express");
const router = express.Router();
const { getAllReviews, getOneReview, addReview } = require("../Controllers/reviewControllers");

router.get("/",getAllReviews)

router.get("/:id", getOneReview)

router.post("/", addReview)


module.exports = router;
