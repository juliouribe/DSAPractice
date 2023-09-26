/*
Breadth first search also known as tree level ordering

The previous tree traversal methods used a stack. For breadth first search, we
need to use a queue.

When we traverse the tree, we add childnodes to the queue, then visit the node
and move on. Visit the other node, add children, visit the node.

Breadfirst search does not use recursion.
*/


export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];
  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;

    // search
    if (curr?.value === needle) {
      return true;
    }

    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }

    return false;
  }
}
