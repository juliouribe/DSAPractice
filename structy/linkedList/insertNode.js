class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const insertNode = (head, value, index) => {
//   const node = new Node(value);
//   if (index === 0) {
//     node.next = head;
//     return node;
//   }
//   let prev;
//   let curr = head;
//   for (let i = 0; i < index; i++) {
//     prev = curr;
//     curr = curr.next;
//   }
//   // Insert node
//   if (prev) prev.next = node;
//   node.next = curr;

//   return head;
// };
const insertNode = (head, value, index, count = 0) => {
    if (index === 0) {
        const node = new Node(value);
        node.next = head;
        return node;
    }

    if (count === index - 1) {
        const next = head.next;
        head.next = new Node(value);
        head.next.next = next;
        return head;
    }
    insertNode(head.next, value, index, count + 1);
    return head;
};

module.exports = {
    insertNode,
};
