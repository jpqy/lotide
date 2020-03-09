// Returns middle element of array:
// -Blank array if 0-2 elements
// -Single element if odd number of elements
// -Middle two elements if even number of elements
const middle = function(array) {
  arrayLength = array.length;
  if (arrayLength < 3) {
    return [];
  }
  const midIndex = arrayLength / 2;
  if (arrayLength % 2 === 0) {
    return [array[midIndex - 1], array[midIndex]];
  } else {
    return [array[parseInt(midIndex)]];
  }
};

module.exports = middle;

