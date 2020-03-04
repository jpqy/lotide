const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

// Returns first key in object that contains a target value
const findKeyByValue = function(object, target) {
  for (let key in object) {
    if (object[key] === target)
      return key;
  }
}
// Test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);