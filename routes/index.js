/* ***********************
 * Authors: Grant Call
 * Course: CSE 341
 * Citations for assistance: Github Copilot
 *************************/
const router = require("express").Router();
const baseRoutes = require("./baseRoutes");

// Base route
router.use("/", baseRoutes);

module.exports = router;
