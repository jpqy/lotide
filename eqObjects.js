const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const obj1keys = Object.keys(object1);
  const obj2keys = Object.keys(object2);

  // Check if number of keys are the same
  if (obj1keys.length !== obj2keys.length)
    return false;

  // Go through each key in obj1 and see if values match for key in obj2
  for (const key of obj1keys) {

    // If current value is array, use eqArrays to compare instead
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    // If current value is object but not array, call function recursively
    if (typeof object1[key] == 'object') {
      return eqObjects(object1[key], object2[key]);
    }

    // Value must be primitive, so compare them directly
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// // Test code for primitives\
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// // Test code for arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 4, 4, 5] };
// assertEqual(eqObjects(cd, cd2), false);

// // Test code for nested objects
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1, y: 0 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);