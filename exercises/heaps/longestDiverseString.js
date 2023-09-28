/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */


var longestDiverseString = function (a, b, c) {
  // only contains letters a, b, or c
  // doesn't contain a triplet of "aaa", "bbb", "ccc"
  // contains at most a, b, c integers of the given args
  // Given three integers a, b, and c return the longest possible happy string
  // if no substring is available, return an empty string

  // Start with the largest integer since we want to split up the string using the largest letters and break it up with smaller quantities
  // Find out how many times we can break up the higher input.
  let substring = ''
  const letters = [[a, 'a'], [b, 'b'], [c, 'c']]

  // While two of the three are above zero
  while (letters.length > 1) {
    let subLen = substring.length - 1;
    letters.sort((a, b) => a[0] - b[0]);
    let [count, char] = letters.pop()
    if (sub > 1 && (substring[subLen] == char && substring[subLen] == char)) {
      // We need to break out early when we have a remainder
      let [countNext, charNext] = letters.pop();
      substring += charNext;
      countNext -= 1;

      if (countNext > 0) {
        letters.push([countNext, charNext])
      }
    } else {
      substring += char;
      count -= 1;
    }
    if (count > 0) {
      letters.push([count, char])
    }
  }
};
