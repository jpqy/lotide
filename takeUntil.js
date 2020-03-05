// Return a slice of the array with elements taken from the beginning.
// It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }

  // Return original array if there are no matches
  return array;
}

// Test
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  else
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5]);