/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  /*
  Problem is basically hey are there enough instances of letters from the ransomNote
  in the magazine for me to be able to create the ransomeNote? RansomeNote is the requirement
  and the magaine is the supplier. Its okay if we have "too many" letters.

  Count amount of letters in magazine. Store this in a hash/object
  Iterate over ransomenote and decrement from the hash/object. As soon as we hit a negative we can return false
  If we iterate over all ransome note letters and there's no negative value we can return true
  */
  const magCount = {};
  for (i of magazine) {
    if (i in magCount) {
      magCount[i] += 1;
    } else {
      magCount[i] = 1;
    }
  }
  for (j of ransomNote) {
    if (j in magCount) {
      magCount[j] -= 1;
      if (magCount[j] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true
};
