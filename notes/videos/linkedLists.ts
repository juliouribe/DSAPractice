/*
What sucks about an array?
- deletion, you don't really delete. You zero something out
- insertion, you overwrite
- doesn't grow

LinkedList
- singly and doubly linked

LinkedLists are magical because you can create a node and then allocate more
memory later and chain it on.

node <T>
vale: T
next?: Node <T>
prev?: Node <T>  // doubly linked. Not always available.

When inserting a node, you just re-assign some .nexts and .prevs. Those operations
don't depend on the length of the lists so they are constant time operations.

A <-> B <-> C <-> D
How do we insert F between A and B?

A -> F
F -> B
F <- B
A <- F

How do we remove C?
B = C.prev // get the previous node.
B.next = C.next // assign the previous node's next to the next of the node you want to remove
C.next.prev = B or C.prev // Make D point to B
C.prev = C.next = null // make C not point at anything.

When you search for a value, return the value not the node. Don't want the outside
world to mess with the nodes.

More notes
- deleting from tails or head is constant time. Super quick since we have pointers to that.
- deleting from the middle is the deletion operation plus traversal cost. Can be linear depending on where the node is.
- Adding to the linkedlist can be quick
- prepend / append is quick at the ends
- traversal is the biggest cost but everything else is super fast

LinkedLists are super foundational. Understanding them will help with trees and graphs


*/
