class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values) => {
    let temp = new Node(null);
    let curr = temp;
    for (const val of values) {
        const node = new Node(val);
        curr.next = node;
        curr = curr.next;
    }
    return temp.next;
};

module.exports = {
    createLinkedList,
};
