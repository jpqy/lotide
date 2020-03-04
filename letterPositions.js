const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected))
    console.log(`💪️💪️💪️ Assertion Passed: ${actual}  ===  ${expected}`);
  else
    console.log(`😿️😿️😿️ Assertion Failed: ${actual}  !==  ${expected}`);
};

const letterPositions = function(sentence) {
  const results = {};

  // Remove spaces from sentence and split it into array
  sentenceArray = sentence.split(' ').join('').split('');

  // Go through each letter and push the index to results depending
  // on if it exists already
  for (let i = 0; i < sentenceArray.length; i++) {
    if (results[sentenceArray[i]])
      results[sentenceArray[i]].push(i);
    else
      results[sentenceArray[i]] = [i];
  }
  return results;
};

// Test case
const result = letterPositions('hello');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['l'], [2, 3]);

