// function RemoveDuplicateNumbers(num) {
//   const numStr = new Set(num);
//   return numStr;
// }
// let numStr = [
//   2, 3, 4, 9, 9, 9, 9, 5, 5, 5, 5, 6, 7, 8, 9, 9, 9, 9, 99, 10, 11, 12,
// ];

// console.log(RemoveDuplicateNumbers(numStr));

function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums2)); // Output: 5,
