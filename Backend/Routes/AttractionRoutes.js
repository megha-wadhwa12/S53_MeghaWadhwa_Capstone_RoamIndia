const express = require("express");
const router = express.Router();
const { getAllAttractions,createAllAttractions, updateAttraction } = require("../Controllers/attractionControllers");

router.get("/",getAllAttractions)

router.post("/",createAllAttractions)

router.patch("/:id",updateAttraction)

module.exports = router;
