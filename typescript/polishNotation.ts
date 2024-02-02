function calc(a: number, b: number, operand: string): number {
    if (operand === '+') {
        return a + b;
    } else if (operand === '-') {
        return a - b;
    } else if (operand === '*') {
        return a * b;
    } else {
        return Math.trunc(a / b);
    }
}

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (Number.isInteger(Number(token))) {
            stack.push(parseInt(token));
        } else {
            const b = stack.pop() as number;
            const a = stack.pop() as number;
            const result = calc(a, b, token);
            stack.push(result);
        }
    }

    return stack.pop() as number;
};
