function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Test cases

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 5;
console.log(binarySearch(array1, target1)); // Output: 4 (index of 5 in the array)

let array2 = [10, 20, 30, 40, 50, 60];
let target2 = 35;
console.log(binarySearch(array2, target2)); // Output: -1 (35 is not in the array)

let array3 = [2, 4, 6, 8, 10];
let target3 = 8;
console.log(binarySearch(array3, target3)); // Output: 3 (index of 8 in the array)

let array5 = [3,7,11,13,19,27];
let target5 = 27;
console.log(binarySearch(array3, target3)); // Output: 3 (index of 8 in the array)

let array4 = [];
let target4 = 7;
console.log(binarySearch(array4, target4)); // Output: -1 (empty array)
