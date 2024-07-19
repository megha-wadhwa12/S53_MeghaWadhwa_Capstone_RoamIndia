const express = require("express");
const router = express.Router();
const { getAllAttractions, createAllAttractions, updateAttractions, photosAdd } = require("../Controllers/attractionControllers");

router.get("/",getAllAttractions)

router.post("/",createAllAttractions)

router.put("/:id",updateAttractions)

router.patch("/:id/photos",photosAdd)

module.exports = router;
