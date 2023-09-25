/*
Bubble sort follows the principle for determining that an array is sorted. Value
at i is less than value at i + 1.

xi < xi + 1

When you go through one iteration of bubble sort, the largest number goes to the
last index. Following iterations only need to go from 0 to array - n.

To determine the sum of numbers in a range (1 + 2 + 3 + 4 + 5... n) you can use the
following formula:

(n+1) * (n/2)

n(n+1) / 2 = O(n^2 + n)/2
Drop the /2 and n. It's O(n^2)
*/

export default function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

// typical javascript
// const function bubbleSortJS(arr) {
//   for (let i = 0; i < arr.length; ++i) {
//     for (let j = 0; j < arr.length - 1 - i; ++j) {
//       if (arr[j] > arr[j + 1]) {
//         const tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
// }
