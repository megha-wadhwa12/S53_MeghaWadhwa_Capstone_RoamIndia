const express = require("express");
const router = express.Router();

const {getAllStates, getOneState} = require('./../Controllers/stateControllers')

router.get('/',getAllStates)

router.get('/:id', getOneState)


module.exports = router;
