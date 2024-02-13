// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListCycle = (head) => {
    const visited = new Set();
    let curr = head;
    while (curr) {
        if (visited.has(curr)) {
            return true;
        }
        visited.add(curr);
        curr = curr.next;
    }
    return false;
};

module.exports = {
    linkedListCycle,
};
