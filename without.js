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

module.exports = without;

// Test cases
// assertEqualArrays(without([1, 2, 3], [1]), [2, 3]);
// assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertEqualArrays(without(["1", "2", "3", 5], [1, '2', "3", '5']), ["1", 5]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertEqualArrays(words, ["hello", "world", "lighthouse"]);