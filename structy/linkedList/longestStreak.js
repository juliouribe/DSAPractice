// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
    if (!head) return 0;
    let longest = 0;
    let curr = 0;
    let currValue = head.val;
    let node = head;
    while (node) {
        if (currValue === node.val) {
            curr++;
        } else {
            curr = 1;
            currValue = node.val;
        }
        if (curr > longest) {
            longest = curr;
        }
        node = node.next;
    }
    return longest;
};

module.exports = {
    longestStreak,
};
