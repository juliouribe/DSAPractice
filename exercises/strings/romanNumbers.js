/**
 * @param {string} s
 * @return {number}
 */
symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function (s) {
  let value = 0;
  // For roman numerals, the largest symbol is first. If you have symbols
  // that are larger than values to the right or equal, you can keep adding them
  // if you have symbols smaller than the symbols to the right then we have a IV
  // or IX type of situation so we sub those symbols in between.
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      value -= symbols[s[i]];
    } else {
      value += symbols[s[i]];
    }
  }
  return value
};
