// This function takes an array of numbers as input and returns the largest number in the array.
function LargestNumbers(arr) {
  // Initialize a variable 'max' to the first element of the array.
  let max = arr[0];

  // Loop through the array starting from the second element (index 1).
  for (let i = 1; i < arr.length; i++) {
    // If the current element is greater than the current 'max' value,
    // update 'max' to the current element.
    if (arr[i] > max) max = arr[i];
  }

  // Return the largest number found in the array.
  return max;
}

// Example usage:
let arr = [10, 324, 45, 90, 9808];
console.log(LargestNumbers(arr)); // Output: 9808 (the largest number in the array)
