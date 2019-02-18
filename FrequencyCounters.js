/* 
* Frequency Counters
- This pattern uses objects or sets to collect values/frequencies of values
+ Thic can often avoid the need for nested loops or O(N^2) operations with arrays/strings
*/

/*
  Write a fn called same, which accepts two arrays.
  The fn should return true if every value in the array has 
  its correspond value squared in the 2nd array. 
  The frequency of values must be the same
*/

// Common solution (Time Complexity (N^2))
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored (Time complexity O(n))

function sameR(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
