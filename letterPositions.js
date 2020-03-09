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

module.exports = letterPositions;
// Test case
// const result = letterPositions('hello');
// assertArraysEqual(result['h'], [0]);
// assertArraysEqual(result['l'], [2, 3]);

