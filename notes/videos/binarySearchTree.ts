/*
The one rule for a binary search tree: Everything to the left must be smaller or
equal to the parent and everything to the right node.

find(n, v): boolean
  if !n return false;

  if n.v = v return true;

  // if node value is too small, check the larger side
  if n.v < v
    return find(n.r, v)

  // if node value is too large, check the smaller side
  return find(n.l, v);

Finding in a search tree is not O(log n). It's O(h) where h is the height of the
tree. Lands somewhere between log n to n.

Insertion in a search tree.
Similar type of traversal as find but you keep going until you find a null and
attach a new node there.

insert(node, v, )
  if node.v < v
    if !node.right
      node.right.
    insert(node.right)
  else if (node.v >= v)
    insert(node.left, v)

Deleting
Case 1: No child
Just delete. All good

Case 2: One child
Change the pointer from parent to point to the child. Then delete. Just replace it

Case 3: Removing a node with children
You can replace it with the smallest on the largest side or the largest on the
small side. Consider keeping track of the height and choose the node with the
largest height. Use that one so you can shrink the tree up a bit.

If I don't "find" often but I insert a lot. Use red/black algo
If I don't "insert" but I "find" a lot. Use ABL
*/

// write a binary search on a binary search tree
function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;

  if (curr.value === needle) return true;

  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  return search(curr.left, needle);
}

export default function dfsBst(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
