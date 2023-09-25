/*
Queue

Very common. FIFO.

A -> B -> C -> D
^              ^
h              t

You have two pointers. One at head and another at tail, end. When you add an item
to the queue, you link D to the next item. Then update t to point at the new item.

To pop A, you save a reference to A, point head to B, and remove A's reference to B.

A = head
head = head.next
A.next = null
return A.val

Queue's
- peek (see first element)
- dequeue (pop)
- enqueue (add/append/push)

*/
type Node<T> = {
  value: T,
  next?: Node<T>
}
export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return
    }

    // This is a reference to the node that is currently the tail. We point it
    // towards the new node we just made.
    this.tail.next = node;
    // Now we update the pointer that is tracking the tail to our new node.
    this.tail = node
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = this.head.next;
    // can optionally clear out the head.next
    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
