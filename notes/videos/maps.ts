/*
Maps

load factor: the amount of data points vs the amount of storage (data.len / storage.capacity)
key: a value that is hashable and is used to look up data. The hash has to be consistent
value: a value associated with a key
collision: when 2 keys map to the same cell

key maps to value with a consistent hash. hash(k) => number. It needs to return
a number so we can modulo it based on the length of our storage.

*/
