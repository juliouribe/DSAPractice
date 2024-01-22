var isPalindromeV1 = function (s) {
  if (s.length === 0 || s.length === 1) return true;
  const arr = []
  for (let i = 0; i < s.length; i++) {
    let current = s[i].toLowerCase();
    if (current.match(/[a-z]/i)) {
      arr.push(current);
    }
  }
  return arr.join(' ') === arr.reverse().join(' ');
};

var isPalindrome = function (s) {
  // Check for palindrome dropping symbols and spaces. Case insensitive.
  // Compare alphanumeric characters only.

  // Base case. A string is a palindrome if empty or just one character.
  if (s.length === 0 || s.length === 1) return true;
  // We're going to use two pointers starting at the beginning and the end
  // We're going to scan towards the middle while checking for equality
  // If we find a non alphanumeric character we're going to skip it
  // We're going to use regex to check for alphanumeric characters

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let leftChar = s[left].toLowerCase();
    let rightChar = s[right].toLowerCase();
    if (!leftChar.match(/[a-z0-9]/i)) {
      left++;
      continue;
    }
    if (!rightChar.match(/[a-z0-9]/i)) {
      right--;
      continue;
    }
    if (leftChar !== rightChar) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)) // true

s = "race a car";
console.log(isPalindrome(s)) // false

s = " ";
console.log(isPalindrome(s)) // true

var isPalindrome2 = function(s) {
  let clean = ''
  for (char of s) {
      if (char.match(/[a-z0-9]/i)) {
          clean += char.toLowerCase();
      }
  }
  return clean === clean.split('').reverse().join('');
};
