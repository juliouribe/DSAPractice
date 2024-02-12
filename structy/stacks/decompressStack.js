const decompressBraces = (s) => {
    const nums = '1234567890';
    const stack = [];
    for (let char of s) {
        if (nums.includes(char)) {
            stack.push(Number(char));
        } else {
            // Once we reach the closing bracket we kick off building the segment.
            if (char === '}') {
                let segment = '';
                while (typeof stack[stack.length - 1] !== 'number') {
                    // pop everything off into the segment unless it is a number.
                    const popped = stack.pop();
                    segment = popped + segment;
                }
                // Once we get to the number, we repeat the segment.
                const number = stack.pop();
                stack.push(repeat(segment, number));
            } else if (char !== '{') {
                // pretty much put everything into the stack. Our last item is the num.
                stack.push(char);
            }
        }
    }
    return stack.join('');
};

const repeat = (segment, n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += segment;
    }
    return result;
}

module.exports = {
    decompressBraces,
};
