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

// Checks to see if a target element is present in an array
const isIn = function(target, array) {
  for (item of array) {
    if (target === item)
      return true;
  }
  return false;
}

// Return a modified source array that doesn't contain elements
// that are in itemsToRemove array
const without = function(source, itemsToRemove) {
  let result = [];
  for (const item of source) {
    if (!isIn(item, itemsToRemove)) 
      result.push(item);
  }
  return result;
}



// Test cases
assertEqualArrays(without([1, 2, 3], [1]), [2, 3]);
assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertEqualArrays(without(["1", "2", "3", 5], [1, '2', "3", '5']), ["1", 5]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqualArrays(words, ["hello", "world", "lighthouse"]);