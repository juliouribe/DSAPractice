/*
Compare two trees if they are same in value and shape.

Depth first search preserves the shape of the traversal. Breadth first does not.

*/

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // 3 base cases. First two are structural checks. Third one is a value check.
  // If both are null then we've reach leaf nodes, terminus nodes
  if (a === null && b === null) {
    return true;
  }
  // If both weren't null but one is null, then they are not equal and we can return false.
  // Considering the base case above, this is similar to saying A has value but B is null or A is null and B has a value.
  if (a === null || b === null) {
    return false;
  }
  // If they both have a value but they are not equal.
  if (a.value !== b.value) {
    return false;
  }
  // If all gravy then keep going to child nodes.
  // The and statement here is nice because if any of these return false at any
  // point then we will raise the false all of the way to the top.
  return compare(a.left, b.left) && compare(a.right, b.right);
}
