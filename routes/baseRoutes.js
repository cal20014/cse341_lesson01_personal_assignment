/* ***********************
 * Authors: Grant Call
 * Course: CSE 341
 * Citations for assistance: Github Copilot
 *************************/

const router = require("express").Router();
const utils = require("../utils");
const baseController = require("../controllers/baseController");

// Base route
router.get("/", baseController.buildBaseRoute);

// 
module.exports = router;
