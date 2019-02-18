/**
 * @description Calculates the character frequencies in a string.
 * - Only count English alphabetical characters (a..z).
 * - Ignore numbers, whitespace, and punctuation.
 * - Character count is case-insensitive ('A' and 'a' count toward the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 * @example
 *  charFreq('Ceres123');
 *  // returns { c: 1, e: 2, r: 1, s: 1 }
 */
function charFreq(sentence) {
  let frequencyCounter = {};
  let verifiedSentence = sentence.replace(/[^A-Za-z]/g, "").toLocaleLowerCase();

  for (let i = 0; i < verifiedSentence.length; i++) {
    let letter = verifiedSentence[i];
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }

  return frequencyCounter;
}

console.log(charFreq("\\test\\red\\bob\\fred\\new"));
console.log(charFreq("123ab    cABC-_*(!@#$%^&*()_-={}[]:\"<>,.?/~`'"));
console.log(charFreq("Ceres123"));
