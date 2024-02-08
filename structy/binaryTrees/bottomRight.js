const bottomRightValue = (root) => {
    /*
    Bottom right means furthest right in the last level.
    Can use BFS to iterate to the bottom and get the last value.
    */
    const queue = [root];
    let last;
    while (queue.length) {
        const curr = queue.shift();
        last = curr;
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    return last.val;
};
