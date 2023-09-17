// Define a function named maxSubarraySum that calculates the maximum subarray sum.
function maxSubarraySum(nums) {
  // Check if the input array is empty. If so, return 0 as there are no elements.
  if (nums.length === 0) {
    return 0;
  }

  // Initialize the maximum sum as the first element of the array.
  let maxSum = nums[0];

  // Initialize the current sum as the first element of the array.
  let currentSum = nums[0];

  // Iterate through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
    // Calculate the new current sum by either continuing the subarray or starting a new one.
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update the maximum sum if the current sum is greater.
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum subarray sum.
  return maxSum;
}

// Example usage: Create an array of numbers and find the maximum subarray sum.
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums)); //Maximum Subarray Sum: 6

