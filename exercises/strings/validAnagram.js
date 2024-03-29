/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // letter count hash
  const counts = {};
  for (char of s) {
    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }
  for (char of t) {
    if (char in counts) {
      counts[char] -= 1;
      if (counts[char] < 0) {
        return false
      }
    } else {
      return false
    }
  }

  return true
};

var isAnagram2 = function (s, t) {
  const charMap = {};
  for (const char of s) {
    if (char in charMap) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }
  for (const char of t) {
    if (char in charMap) {
      charMap[char] -= 1;
    } else {
      return false;
    }
  }
  // for (const val of Object.values(charMap)) {
  //     if (val !== 0) {
  //         return false;
  //     }
  // }
  // return true
  return Object.values(charMap).every(val => val === 0);
};


var isAnagram3 = function(s, t) {
  const hashCount = {};
  for (let i = 0; i < s.length; i++) {
      if (s[i] in hashCount) {
          hashCount[s[i]]++;
      } else {
          hashCount[s[i]] = 1;
      }
  }
  for (let i = 0; i < t.length; i++) {
      if (t[i] in hashCount) {
          hashCount[t[i]]--;
      } else {
          return false;
      }
  }
  return Object.values(hashCount).every(num => num === 0);
};
