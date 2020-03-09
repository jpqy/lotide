// Flattens an array of arrays (recursively handles nested arrays)
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