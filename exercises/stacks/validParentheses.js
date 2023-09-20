var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    switch (current) {
      case '(':
      case '{':
      case '[':
        stack.push(current);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      default:
        return false;
    }

  }
  return stack.length === 0
};

s = "()"
console.log(isValid(s)) // true

s = "()[]{}"
console.log(isValid(s)) // true

s = "(]"
console.log(isValid(s)) // false
