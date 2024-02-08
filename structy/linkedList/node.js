class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;

function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

function recPrint(node) {
    if (!node) return;
    console.log(node.val);
    recPrint(node.next);
}

console.log("iterative")
printLinkedList(a);

console.log("recursive")
recPrint(a);
