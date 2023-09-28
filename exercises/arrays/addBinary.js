/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // start at the end of both strings
  // if both are zero, append zero to new num
  // if one is 1, append 1 to new num
  // if both are 1, append 0 to new num but for the next loop you have a 1 to carry
  let num = ''
  let remainder = false;

  let len1 = a.length - 1;
  let len2 = b.length - 1;
  // Keep looping until len1 and len2 are below zero, and we have no remainder
  for (; len1 >= 0 || len2 >= 0 || remainder; len1--, len2--) {
    const bits = []
    if (len1 >= 0) {
      if (a[len1] === '1') bits.push(1);
    }
    if (len2 >= 0) {
      if (b[len2] === '1') bits.push(1);
    }
    if (remainder) {
      bits.push(1);
      remainder = false;
    }
    if (bits.length === 0) {
      num = '0' + num;
    } else if (bits.length === 1) {
      num = '1' + num;
    } else if (bits.length === 2) {
      num = '0' + num;
      remainder = true
    }
  }
  return num;
};
