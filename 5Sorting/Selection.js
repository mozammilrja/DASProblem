// Use selection sort when:
// 1. The dataset is small.
// 2. You prefer a simple and easy-to-understand sorting algorithm.
// 3. Memory usage is a concern because selection sort is in-place.
// 4. You need a stable sorting algorithm that preserves the order of equal elements.
// Selection sort is not a stable sorting algorithm because it does not guarantee the preservation of the relative order of equal elements during the sorting process

// Time Complexity:
// Worst-case: O(n^2)
// Average-case: O(n^2)
// Best-case: O(n^2)
// Space:O(1)

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index contains the minimum value
    let minIndex = i;

    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the current element (at index i)
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [2, 6, 8, 4, 10];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
