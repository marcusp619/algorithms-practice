/* Anagrams
Given two strings, write a function to determin if the second string is an anagram of the first. AN anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
*/

// Time Complexity O(n)
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, ++, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //cant find letter or letter is zero then it;s not an anagram
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}