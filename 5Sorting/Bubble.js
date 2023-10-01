// Bubble sort is typically not the most efficient sorting algorithm, especially for large datasets, and its time complexity reflects this inefficiency. The time complexity of bubble sort is O(n^2) in the worst and average cases, where "n" is the number of elements in the array. This means that as the size of the array (n) increases, the number of comparisons and swaps grows quadratically.

// function bubbleSort(arr) {
//   const n = arr.length;

//   // Outer loop to iterate through the entire array
//   for (let i = 0; i < n - 1; i++) {
//     // Inner loop to compare and swap adjacent elements
//     for (let j = 0; j < n - i - 1; j++) {
//       // Compare adjacent elements
//       if (arr[j] > arr[j + 1]) {
//         // Swap the elements if they are in the wrong order
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// // Example usage:
// const unsortedArray = [10, 1, 7, 6, 14, 9];
// const sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray); // Output: [ 1, 6, 7, 9, 10, 14 ]

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
        swapped = true;
      }
    }

    // If no swaps were made in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [10, 1, 7, 6, 14, 9];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [ 1, 6, 7, 9, 10, 14 ]
