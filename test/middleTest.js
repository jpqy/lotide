//assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

// Test cases
describe('middle.js', () => {
  it('should return empty array if given array of one element', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return empty array if given array of one element', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return middle element if given array of three element', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return two middle elements if given array of four elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});