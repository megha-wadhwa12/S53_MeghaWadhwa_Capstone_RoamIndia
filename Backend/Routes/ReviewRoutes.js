const express = require("express");
const router = express.Router();
const { getAllReviews, getOneReview, addReview, updateReviews } = require("../Controllers/reviewControllers");

router.get("/",getAllReviews)

router.get("/:id", getOneReview)

router.post("/", addReview)

router.put("/:id", updateReviews)


module.exports = router;
