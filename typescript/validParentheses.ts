function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; ++i) {
        const bracket = s[i];
        switch (bracket) {
            case '(':
            case '[':
            case '{':
                stack.push(bracket);
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
            default:
                return false;
        }
    }
    return stack.length === 0;
};
