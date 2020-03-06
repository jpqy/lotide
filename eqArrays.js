// FUNCTION IMPLEMENTATION
const eqArrays = function(a1, a2) {
  // Can't be equal if arrays are not same length
  if (a1.length !== a2.length)
    return false;

  // Go through each item in array and compare the objects
  for (let i = 0; i < a1.length; i++) {

    // If elements are arrays, call eqArray function recursively
    if (Array.isArray(a1[i]) && Array.isArray(a2[i])) {
      if (!eqArrays(a1[i], a2[i])) {
        return false;
      }
    } else if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
}


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// Test code for nested
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);