// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const sumList = (head) => {
//   let sum = 0;
//   while (head) {
//     sum += head.val;
//     head = head.next;
//   }
//   return sum;
// };
const sumList = (node, sum = 0) => {
    if (!node) return sum;
    sum += node.val;
    return sumList(node.next, sum);
};

module.exports = {
    sumList,
};
