const pairedParentheses = (str) => {
    /*
    Add opening brackets to the stack. If its closing, pop a value off
    the stack which should be an open bracket or return false.
    At the end make sure the stack is empty
    */
    const stack = [];
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.pop() !== '(') return false;
        }
    }
    return stack.length === 0;
};

module.exports = {
    pairedParentheses,
};
