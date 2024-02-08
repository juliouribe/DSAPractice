// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const getNodeValue = (head, index) => {
//   let count = 0;
//   let current = head;
//   while (current) {
//     if (count === index) return current.val;
//     current = current.next;
//     count += 1;
//   }
//   return null;
// };

const getNodeValue = (node, index, curr = 0) => {
    if (!node) return null;
    if (index === curr) return node.val;
    return getNodeValue(node.next, index, curr + 1)
}

module.exports = {
    getNodeValue,
};
