import { ListNode } from "../mergeTwoSortedLists";

// Initialize an empty object with keys and values integer values (technically any number)
const seen: { [key: number]: number } = {};

// Initialize empty node where node is a class
const listNode = new ListNode;

// Initialize new node with a type interface.
type Node<T> = {
    value: T,
    next?: Node<T>,
}
const node = { value: 5 } as Node<number>;
