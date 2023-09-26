/*
Everything is a tree. Your file system, the DOM, git, everything.

Node <T>
value: T
children: []

Root: parent node. Top most node.
height: the longest path from the root to the most child node
binary tree: 0 to 2 children nodes max
Node <T>
value: T
left: Node <T>
right: Node <T>

general tree: a tree with 0 or more children
binary search tree - a tree in which it has specific ordering (left is always smaller than the right and parent)
leaves - a node without children
balanced - a tree is perfectly balanced when any nodes left and right children have the same height
branching factor - the amount of children a tree has

Tree Traversal
You do three things

Pre-order
- visit Node
- recurse left
- recurse right

In-order (for a binary search will actually print out the array in order)
- recurse right
- visit Node
- recurse left

Post-order (visit the node on the way out when you need to manage memory)
- recurse right
- recurse left
- visit Node

All three of these traversal methods are considered depth first. You always
go to the deepest nodes first.
*/

// pre-order traversal
function walkPre(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // pre-walk
  // pre
  path.push(curr.value);
  // recurse
  walkPre(curr.left, path);
  walkPre(curr.right, path);
  // post

  // we return path here so it "bubbles up" once we are done recursing.
  return path;
}


export default function pre_order_search(head: BinaryNode<number>): number[] {
  // we would like to return the visited nodes in order. requires pre-order
  return walkPre(head, []);
}


// In Order
function walkInOrder(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // In order
  walkInOrder(curr.left, path);
  path.push(curr.value);
  walkInOrder(curr.right, path);

  // we return path here so it "bubbles up" once we are done recursing.
  return path;
}


export function in_order_search(head: BinaryNode<number>): number[] {
  // we would like to return the visited nodes in order. requires pre-order
  return walkInOrder(head, []);
}

// Post Order
function walkPostOrder(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // In order
  walkPostOrder(curr.left, path);
  walkPostOrder(curr.right, path);
  path.push(curr.value);

  // we return path here so it "bubbles up" once we are done recursing.
  return path;
}


export function post_order_search(head: BinaryNode<number>): number[] {
  // we would like to return the visited nodes in order. requires pre-order
  return walkPostOrder(head, []);
}
