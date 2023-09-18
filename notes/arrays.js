arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
emptyArr = [];

// Check if array is empty
arr.length === 0; // false
emptyArr.length === 0; // true

// Adding an element to the front of the array
arr.unshift(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Filter out elements that don't match a condition
arr.filter((num) => num % 2 === 0); // [0, 2, 4, 6, 8]

// Find the first element that matches a condition
arr.find((num) => num % 2 === 0); // 0

// Find the index of the first element that matches a condition
arr.findIndex((num) => num % 2 === 0); // 0

// Check if an element exists in an array
arr.includes(0); // true

// Check if any elements match a condition
arr.some((num) => num % 2 === 0); // true

// Check if all elements match a condition
arr.every((num) => num % 2 === 0); // false

// Find the max value
Math.max(...arr); // 9

// Find the min value
Math.min(...arr); // 0

// Map each element to a new value
arr.map((num) => num * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// Reduce the array to a single value
arr.reduce((acc, num) => acc + num, 0); // 45

// Reverse the array
arr.reverse(); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// Sort the array
arr.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Slice the array
arr.slice(0, 3); // [0, 1, 2]

// Create a copy of the array
arr.slice(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Create a deep copy of the array
JSON.parse(JSON.stringify(arr)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Remove the last element
arr.pop(); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Sort an array of objects by a property
arrPerson = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 18 },
];
// [{ name: 'Charlie', age: 18 }, { name: 'Alice', age: 21 }, { name: 'Bob', age: 25 }]
arrPerson.sort((a, b) => a.age - b.age);

