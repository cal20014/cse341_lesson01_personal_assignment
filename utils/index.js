const utils = {};
const Chance = require("chance");
const chance = new Chance();

utils.getName = () => {
  return chance.name();
};

module.exports = utils;
