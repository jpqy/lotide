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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  obj1keys = Object.keys(object1);
  obj2keys = Object.keys(object2);

  // Check if number of keys are the same
  if (obj1keys.length !== obj2keys.length)
    return false;

  // Go through each key in obj1 and see if values match for key in obj2
  for (key of obj1keys) {

    // If current value is array, use eqArrays to compare instead
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    }
    else if (object1[key] !== object2[key])
      return false;
  }
  return true;

};

// Outputs to the console whether two objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`💪️💪️💪️ Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`😿️😿️😿️ Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};

// Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);