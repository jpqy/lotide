# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jpenglabs/lotide`

**Require it:**

`const _ = require('@jpenglabs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: console.logs messages about whether array1 and array 2 are equal
* `assertEqual(primitive1, primitive2)`: console.logs messages about whether primitives are equal
* `countLetters(string)`: counts how many of each letter are in a string, returns a summary object with keys as the letters and values as the count. Ignores spaces.
* `countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through; itemsToCount: an object specifying what to count as its key and either true or false as its value
* `eqArrays(array1, array2)`: returns true or false
* `eqObjects(obj1, obj2)`: returns true or false
* `findKey(object, callback)`: scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined
* `findKeyByValue(object, target)`: returns first key in object that contains a target value
* `flatten(array)`: flattens an array of arrays (recursively handles nested arrays)
* `head(array)`: returns the first element
* `letterPositions(sentence)`: returns object with letters as keys and array of indices where it appears in the sentence as values
* `map(array, callback)`: replaces all elements in array by its value after the callback function
* `middle(array)`: Returns middle element of array:
  - Blank array if given array of 0-2 elements
  - Single element if given odd number of elements
  - Middle two elements if given even number of elements
* `tail(array)`: returns araay of all the elements after the first one
* `takeUntil(array, callback)`: return a slice of the array with elements from the beginning to until the callback returns a truthy value
* `without(sourceArray, itemsToRemoveArray)`: return a modified source array that doesn't contain elements that are in the itemsToRemove array