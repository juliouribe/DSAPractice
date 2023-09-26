/*
Array List

Start with a fixed sized array.

[1,2, ] C:3 ,L:2

We can push and pop in constant time. Length, L, is a pointer that is used
to track the last unused spot in the Array List. Capacity, C, keeps track of
how many items we can store. Once L reaches capacity we copy over.

Once you exceed the size of the array, create a new array with double the size
and copy over all of the values.

[1,2,3,4, , ] C:6, L4

Enqueue/Dequeue is still awful when using ArrayList. You end up with O(n) operations to
move everything. Shift,unshift as well.

Deleting/inserting in the middle of the arrayList also O(n) since you need to
move everything over.

Which to use?

If you are pushing and popping, an ArrayList and a LinkedList work well.

If you are getting values from the middle and know the index, ArrayList. RAM, random access memory
If you want to remove or insert values in the middle, LinkedList
If you are worried about memory and want flexibility, LinkedList.

*/
