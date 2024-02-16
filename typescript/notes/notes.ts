import { ListNode } from "../mergeTwoSortedLists";

// Initialize an empty object with keys and values integer values (technically any number)
const seen: { [key: number]: number } = {};
const hash: {[key: string]: number} = {};

// Initialize an empty hash like object using an interface
interface Pair<K, V> {
    key: K;
    value: V;
}
// K and V can be any type so you can also do number, number or string, string
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1,
};

// Initialize empty node where node is a class
const listNode = new ListNode;

// Initialize new node with a type interface.
type Node<T> = {
    value: T,
    next?: Node<T>,
}
const node = { value: 5 } as Node<number>;

// Set up a counter and update counts.
let map = new Map();
const num = 1;
let count = map.get(num) || 0   // return count or 0. First part is undefined if entry doesn't exist.
map.set(num, count + 1);        // increment the count;

// Initialize and empty m x n array with undefined.
let m = 3;
let n = 2;
const empty2DArray: boolean[][] = Array.from(new Array(m), () => new Array(n).fill(false));

// In an object, the keys are always strings if numbers are passed in.
// In a set, keys can be strings or integers. If you are comparing values from a
// set to keys from an object, always convert the int to string in a set to avoid confusion

