function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// Test cases
let array1 = [1, 2, 3, 4, 5];
let target1 = 3;
console.log(linearSearch(array1, target1)); // Output: true (3 is in the array)

let array2 = [10, 20, 30, 40, 50];
let target2 = 25;
console.log(linearSearch(array2, target2)); // Output: false (25 is not in the array)

let array3 = [];
let target3 = 5;
console.log(linearSearch(array3, target3)); // Output: false (empty array)
