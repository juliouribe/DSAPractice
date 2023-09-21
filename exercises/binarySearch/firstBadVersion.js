var solution = function (isBadVersion) {
  // Binary search your way into finding the first badVersion
  // If the middle is bad, check the left
  // If the middle is good, check the right
  // Use a while loop to avoid recursion
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        // By setting start to mid +1, we're saying look at the version after this good version.
        // If the version after this good version is bad, then we know this is the first bad version.
        // This is how we escape the while loop. As long as the version after this is bad then start and end will be the same.
        start = mid + 1;
      }
    }
    return start
  };
};

// 1, 10, 5
// 1, 5, 2

function isBadVersion(n) {
  return n >= 4;
}

const firstBadVersion = solution(isBadVersion);
console.log(firstBadVersion(10)); // 4

