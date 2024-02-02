function levelOrder(root: TreeNode | null): number[][] {
    /*
    Use BFS and a queue to retrieve nodes
    */
    if (!root) return [];

    let queue = [root];
    const result: number[][] = [];

    while (queue.length) {
        const values: number[] = [];
        const nextLevel: TreeNode[] = [];
        // Push all of the node values in the current. Should be of same level.
        // Also add all of the respective children nodes to the next level queue.
        for (const node of queue) {
            values.push(node.val);
            if (node.left) {
                nextLevel.push(node.left);
            }
            if (node.right) {
                nextLevel.push(node.right);
            }
        }
        // Set the queue to the next level of nodes and add current level's values
        // to our result.
        queue = nextLevel;
        result.push(values);
    };
    return result;
};
