function maxSubarraysum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraysum(nums)); // Corrected function name and variable initialization
