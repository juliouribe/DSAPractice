hash = { a: 1, b: 2, c: 3 }
nestedHash = { a: { b: 1 } }

// Checking if a key exists
char = 'a';
char in hash; // true
hash.keys().includes(char);
hash.hasOwnProperty(char);

// Checking if a value exists
Object.values(hash).includes(1);

// Getting an object with a property that matches a value. Returns the first match or undefined.
nested = nestedHash.find((obj) => obj.b === 1);

// Check if an object is empty
Object.keys(hash).length === 0;

// Getting an array of keys
Object.keys(hash); // ['a', 'b', 'c']

// Getting an array of values
Object.values(hash); // [1, 2, 3]

// Getting an array of key-value pairs
Object.entries(hash); // [['a', 1], ['b', 2], ['c', 3]]
