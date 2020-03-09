// Returns first key in object that contains a target value
const findKeyByValue = function(object, target) {
  for (let key in object) {
    if (object[key] === target)
      return key;
  }
};

module.exports = findKeyByValue;
// Test
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);