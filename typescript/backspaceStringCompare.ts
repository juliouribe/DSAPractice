function backspaceCompare(s: string, t: string): boolean {
    /*
    Compare two strings, when we find a '#' we remove the last string appended.
    The best data structure here is a stack. We'll have respective stacks and
    process input. We'll check for stack length before popping. Lastly we'll turn
    the stacks into strings and compare.
    */
    let sStack: string[] = [];
    let tStack: string[] = [];
    for (let char of s) {
        if (char !== '#') {
            sStack.push(char);
        } else if (sStack.length > 0) {
            sStack.pop()
        }
    }
    for (let char of t) {
        if (char !== '#') {
            tStack.push(char);
        } else if (tStack.length > 0) {
            tStack.pop()
        }
    }
    return sStack.join('') === tStack.join('');
};
