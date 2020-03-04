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

// Test code for primitives\
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// Test code for arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);