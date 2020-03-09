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

module.exports = takeUntil;
// Test
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

// const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
// const results3 = takeUntil(data3, x => x < 0);
// assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5]);