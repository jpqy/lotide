// Implement the function findKey which takes in an object and a callback. 
// It should scan the object and return the first key for which the callback 
// returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}

module.exports = findKey;
// const rating = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }

// assertEqual(findKey(rating, x => x.stars === 2), 'noma');
// assertEqual(findKey(rating, x => x.stars === 1), 'Blue Hill');
// assertEqual(findKey(rating, x => x.stars === 5), undefined);