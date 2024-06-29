const express = require("express");
const router = express.Router();
const { getAllReviews, getOneReview } = require("../Controllers/reviewControllers");

router.get("/",getAllReviews)
router.get("/:id", getOneReview)


module.exports = router;
