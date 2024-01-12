/* ***********************
 * Authors: Grant Call
 * Course: CSE 341
 * Citations for assistance: Github Copilot
 *************************/

const baseController = {};
const utils = require("../utils");

// Build base route
baseController.buildBaseRoute = (req, res) => {
  const names = utils.getName();
  // res.send("Miriam Call");
  res.send(names);
};

module.exports = baseController;
