/*
Instead of head and tail pointed at the start and end always, you have the
head and tail point at the start of items and end of items. Place the items
in the middle of the array not using all of the space right away.

[ , , , ,1,2,3, , , , , ]
         h   t

If you wanna add a number before 1, you subtract 1 from head and assign the value.
IF you wanna remove from the front, you add one to head.
The inverse is true for tail. Add 1 and assign the value. Subtract one to remove from tail

When your tail or head starts getting to the edge. You use modulo to wrap around.
Your tail can move so far right until its start from the beginning.

When your tail exceeds your head, you need to resize.

To resize and copy the elements in the correct order.
1. Go to your head
2. Copy element to new larger array
3. Increment head by 1 and keep going until you get to the length of the items


*/
