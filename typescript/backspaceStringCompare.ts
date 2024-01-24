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
        if (char === '#') {
            if (sStack.length > 0) {
                sStack.pop();
            }
        } else {
            sStack.push(char);
        }
    }
    for (let char of t) {
        if (char === '#') {
            if (tStack.length > 0) {
                tStack.pop();
            }
        } else {
            tStack.push(char);
        }
    }
    return sStack.join('') === tStack.join('');
};
