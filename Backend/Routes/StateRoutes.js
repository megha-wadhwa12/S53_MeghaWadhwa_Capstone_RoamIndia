const express = require("express");
const router = express.Router();

const {getAllStates, getOneState, updateStates} = require('./../Controllers/stateControllers')

router.get('/',getAllStates)

router.get('/:id', getOneState)

router.put('/:id', updateStates)


module.exports = router;
