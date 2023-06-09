const eqArrays = require("./eqArrays");
const asssertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
