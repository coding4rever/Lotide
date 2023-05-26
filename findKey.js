let findKey = function (object, callback) {
  // for...in used to loop over objects
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
