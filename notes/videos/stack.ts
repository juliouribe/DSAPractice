/*
Stacks
- push
- pop
- peek

Very similar to a queue but backwards. When we push, we point the newest node to
to second newest. We can only add and remove from the head.

A <- B  <- C <- D <- E
                     ^
                     h


*/

type Node<T> = {
  value: T,
  prev?: Node<T>
}
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T) {
    const node = {value: item} as Node<T>;

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop() {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    // const head is the node at the top. We are removing and updating the head pointer
    const head = this.head as Node<T>;
    // This updates the head pointer
    this.head = head.prev;
    // This updates the node previously at the top so its not pointing at anything
    head.prev = undefined
    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
