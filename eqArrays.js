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

module.exports = eqArrays;

