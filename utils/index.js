/* ***********************
 * Authors: Grant Call
 * Course: CSE 341
 * Citations for assistance: Github Copilot
 *************************/

const utils = {};
const Chance = require("chance");
const chance = new Chance();

utils.getName = () => {
  let names = [];
  for (let i = 0; i < 10; i++) {
    names.push(chance.name());
  }
  return JSON.stringify(names);
};

module.exports = utils;
