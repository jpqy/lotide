const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

// Counts how many of each letter are in a string, returns an object
// with keys as the letters and values as the count. Ignores spaces.
const countLetters = function(string) {
  
  // Store letter counts
  const counts = {};

  // Remove spaces
  string = string.split(' ').join('');

  // Adds one to the count for each letter depending on if it's encountered
  // for the first time
  for (char of string) {
    if (counts[char])
      counts[char]++;
    else
      counts[char] = 1;
  }
  return counts;
}

// Test cases
console.table(countLetters("lighthouse in the house"));