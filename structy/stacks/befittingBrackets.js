const befittingBrackets = (str) => {
    const stack = [];

    for (let char of str) {
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char);
                break;
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
        }
    }
    return stack.length === 0;
};

module.exports = {
    befittingBrackets,
};
