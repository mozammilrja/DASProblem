function threeSum(nums) {
  const result = [];

  // Check if the array has fewer than 3 elements; if so, there can be no triplets.
  if (nums.length < 3) {
    return result;
  }

  // Sort the input array in ascending order.
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates to avoid duplicate triplets.
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i]; // Calculate the target sum for the triplet.

      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
          // Found a triplet that sums up to zero; add it to the result.
          result.push([nums[i], nums[left], nums[right]]);

          // Skip duplicates to avoid duplicate triplets.
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          // Move the pointers towards each other.
          left++;
          right--;
        } else if (sum < target) {
          // The current sum is too small; move the left pointer to the right.
          left++;
        } else {
          // The current sum is too large; move the right pointer to the left.
          right--;
        }
      }
    }
  }

  return result;
}

// Test cases
const nums1 = [-1, 0, 1, 2, -1, -4];
const result1 = threeSum(nums1);
console.log(result1); // Output: [[-1, -1, 2], [-1, 0, 1]]

const nums2 = [0, 1, 1];
const result2 = threeSum(nums2);
console.log(result2); // Output: []

const nums3 = [0, 0, 0];
const result3 = threeSum(nums3);
console.log(result3); // Output: [[0, 0, 0]]
