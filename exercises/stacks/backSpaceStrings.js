/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  getLength() {
    return this.stack.length;
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop()
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const processString = function (s) {
  const stack = new Stack();

  for (const char of s) {
    if (char !== '#') {
      stack.push(char);
    } else {
      stack.pop(char);
    }
  }
  return stack;
}

const convertStackToString = function (stack) {
  let text = '';
  while (stack.getLength() > 0) {
    text += stack.pop();
  }
  return text;
}


var backspaceCompare = function (s, t) {
  // we're gonna have two stacks, one for each string.
  // we're gonna iterate over each separately and pop whenever a hash tag.
  const stackS = processString(s);
  const stackT = processString(t);

  // Convert stack back to string
  // Check the length is the same
  const sProcessed = convertStackToString(stackS);
  const tProcessed = convertStackToString(stackT);

  return sProcessed === tProcessed;
};
