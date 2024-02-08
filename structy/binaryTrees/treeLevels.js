// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeLevels = (root) => {
    if (!root) return [];
    const levels = [];
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        const level = [];
        while (queue.length) {
            const curr = queue.shift();
            level.push(curr.val);
            if (curr.left) {
                newQueue.push(curr.left);
            }
            if (curr.right) {
                newQueue.push(curr.right);
            }
        }
        levels.push(level);
        queue = newQueue;
    }
    return levels;
};

module.exports = {
    treeLevels,
};
