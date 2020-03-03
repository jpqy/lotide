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

// Returns middle element of array:
// -Blank array if 0-2 elements
// -Single element if odd number of elements
// -Middle two elements if even number of elements
const middle = function(array) {
  arrayLength = array.length;
  if (arrayLength < 3) {
    return [];
  }
  const midIndex = arrayLength / 2;
  if (arrayLength % 2 === 0) {
    return [array[midIndex-1], array[midIndex]];
  } else {
    return [array[parseInt(midIndex)]];
  }
}

// Test cases
assertEqualArrays(middle([1]), []);
assertEqualArrays(middle([1, 2]), []);
assertEqualArrays(middle([1, 2, 3]), [2]);
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
