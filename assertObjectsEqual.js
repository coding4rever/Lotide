const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
};

assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  // ...
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

console.log(`Example label: ${inspect(actual)}`);
