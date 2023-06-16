// Reverse a string.

// function reverseString(str) {
//   const reverseStr = str.split("").reverse().join("");
//   return reverseStr;
// }

// console.log("reverseString", reverseString("mozammil"));

// Find the largest number in an array.

// function largestNumber(num) {}

// const maxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const result = maxNumber.reduce((a,b) => Math.max(a,b))
// console.log(result,'1');

// const result2 = Math.max(...maxNumber)
// console.log(result2,'2')

// Find the sum of all numbers in an array.

// const sum = [1, 2, 3];

// const result = sum.reduce((a, b) => a + b);

// console.log(result,'1');

// Capitalize the first letter of each word in a string.

// const words = ["abc", "def", "else", "elseif", "amp"];

// const result = words.map(
//   (word) => word.charAt(0).toUpperCase() + word.slice(1)
// );
// console.log(result, "1");

// Merge two sorted arrays into a single sorted array.

// const arr1 = [4, 5, 7, 8, 1, 2, 3];
// const arr2 = [1, 2, 3, 5, 6, 7, 8, 9, 4, 5, 61, 34];
// const arr3 = [67, 344, 666, 63, 44];
// const arr4 = [641, 344, 666, 373, 440];
// const arr5 = [617, 346, 666, 363, 434];
// const arr6 = [61, 34, 646, 33, 443];
// const arr7 = [61, 34, 664, 336, 445];

// // Merge the two arrays
// const merged = arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7);

// // Sort the merged array in ascending order
// merged.sort((a, b) => a - b);
// const duplicateRemove = new Set(merged);
// console.log(duplicateRemove);

// Check if two arrays are equal.

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const rrr = arr1.length === arr2.length ? "equal" : "not equal";
// console.log(rrr);

// if (arr1.length === arr2.length) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// Remove duplicate elements from an array.

