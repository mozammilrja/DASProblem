function longestEvenOddSubarray(arr) {
  let maxLen = 1; // Initialize the maximum length as 1 (for the first element).
  let currentLen = 1; // Initialize the current length as 1 (for the first element).

  for (let i = 1; i < arr.length; i++) {
    // Check if the current element has a different parity than the previous element.
    if (arr[i] % 2 !== arr[i - 1] % 2) {
      // If it does, increment the current length.
      currentLen++;
      // Update the maximum length if the current length is greater.
      maxLen = Math.max(maxLen, currentLen);
    } else {
      // If it doesn't have alternating parity, reset the current length to 1.
      currentLen = 1;
    }
  }

  return maxLen;
}
let arr = [ 1, 2, 3, 4, 5, 7, 8 ];
let longestSubarrayLength = longestEvenOddSubarray(arr); 
console.log("Longest Even-Odd Subarray Length:", longestSubarrayLength);
