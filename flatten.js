const eqArrays = function(a1, a2) {
  // Can't be equal if arrays are not same length
  if (a1.length !== a2.length)
    return false;

  // Go through each item in array and compare the objects
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i])
      return false;
  }
  return true;
}

const assertEqualArrays = function(actual, expected) {
  if (eqArrays(actual, expected))
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  else
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
}

// Flattens an array of arrays (one level nested only)
const flatten = function(array) {
  let flattened = [];
  for (const possibleArray of array) {

    // If item is array, go through this nested array and push
    // individual elements to flattened array
    if (Array.isArray(possibleArray)) {
      for (const element of possibleArray) {
        flattened.push(element);
      }
    } else {
      flattened.push(possibleArray);
    }
  }
  return flattened;
}

module.exports = flatten;
// Testing
//assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);