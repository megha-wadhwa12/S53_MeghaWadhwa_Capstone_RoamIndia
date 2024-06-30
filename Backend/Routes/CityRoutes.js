const express = require("express");
const router = express.Router();

const {getAllCities, createAllCities, updateCities} = require('./../Controllers/cityControllers')

router.get('/',getAllCities)

router.post('/',createAllCities)

router.put('/:id',updateCities)


module.exports = router;
