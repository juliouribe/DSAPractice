/*
Quick Sort
Quick sort works by using divide and conquer. We start with a pivot. Look through
the array and do a weak sort. Place items smaller or equal to the left. Items
larger than the pivot to the right. Then we do another weak sort on the left side
and the right side, hence divide and conquer. We keep doing this until we get
to one element or empty arrays.

Using the middle, you can avoid the worst case scenario of trying to sort a
reverse sorted array. Quick sort can have solid performance if you use the middle.
Don't use the ends! Quick sort is O(n log n). Merge sort is also O(n log n) but
has a big memory upfront cost.



*/
function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1)
  qs(arr, pivotIdx + 1, hi)
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  // This loop takes care of swapping all of the elements smaller than the pivot
  // to the left of the pivot. i is a pointer that increments consistently looking
  // at every individual number. idx is a pointer than only increments when we've
  // found a number smaller than the pivot. idx is the place where numbers smaller
  // we'll get moved to. i is looking for big boys.
  // once we are done with this loop, we need to swap the pivot to be one after the
  // idx so all of the numbers larger than the pivot are to the right of it.
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i]
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  // increment one more time so its the first position after the smaller numbers
  idx++;
  // hi is the index of the pivot since we're using the last number in the array as the pivot
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}


export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
