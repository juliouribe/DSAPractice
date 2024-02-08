// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    const data = []
    if (!root) return data;

    const queue = [root]
    while (queue.length) {
        const curr = queue.shift();
        data.push(curr.val);
        if (curr.left) {
            queue.push(curr.left);
        }
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    return data;
};

module.exports = {
    breadthFirstValues,
};
