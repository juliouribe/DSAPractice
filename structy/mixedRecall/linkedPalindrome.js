// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
    let curr = head;
    const values = [];

    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    return values.join('') === values.reverse().join('');
};

module.exports = {
    linkedPalindrome,
};
