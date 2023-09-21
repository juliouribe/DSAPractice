/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // count unique letters and build out a palindrome
  // to build the palindrome
  // 1. take the largest odd number that is greater than 1
  // 2. find the largest even counts and padd the odd number
  // 3. keep going until no more even numbers
  // use a map to count letters and instances
  let largestOdd = 0;
  let largestLetter = '';
  const counts = {};
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current in counts) {
      counts[current] += 1;
    } else {
      counts[current] = 1;
    }
  }
  Object.entries(counts).forEach(([letter, count]) => {
    if (count % 2 === 1 && count > largestOdd) {
      largestOdd = count;
      largestLetter = letter;
    }
  })
  // we have all unique letters and counts.
  let longest = [];
  for (let i = 0; i < largestOdd; i++) {
    longest.push(largestLetter);
  }
  let left = []
  let right = []
  if (Object.keys(counts) === 0) return false;
  Object.keys(counts).forEach(key => {
    if (counts[key] % 2 === 0 && key !== largestLetter) {
      for (let i = 0; i < counts[key]; i++) {
        if (i % 2 === 0) {
          left.push(key);
        } else {
          right.push(key);
        }
      }
    }
  })

  const combined = left.concat(longest, right)
  if (combined.length === 0) return false
  return combined.length;
};
