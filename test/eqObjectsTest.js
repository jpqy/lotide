const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
// Test code 
describe('assertObjectsEqual', () => {
  it('should return true given ab, ba', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it('should return true given ab, ba', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });
});