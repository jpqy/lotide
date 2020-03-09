const assert = require('chai').assert;
const tail = require('../tail');

// Test Case 1: Check the returned array elements
describe('tailTest', () => {
  it('should get get the last 2 element in array of strings', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('should not modify the original array', () => {
    // Test Case: Check the original array
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]); // original array should still have 3 elements!
  });
});

