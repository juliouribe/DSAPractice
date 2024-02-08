// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirstValues = (node, data=[]) => {
//   if (!node) return [];

//   data.push(node.val)
//   depthFirstValues(node.left, data);
//   depthFirstValues(node.right, data);

//   return data;
// };

/*
A while loop works because we use a stack. Stack let's us keep stacking on the
children and popping off do we go deep. The first right child is at the bottom
of the stack while we go down the left side of the tree.
*/
const depthFirstValues = (head) => {
    if (!head) return [];
    const data = []
    const stack = [head];

    while (stack.length) {
        const curr = stack.pop();
        data.push(curr.val)

        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    }
    return data;
};

module.exports = {
    depthFirstValues,
};
