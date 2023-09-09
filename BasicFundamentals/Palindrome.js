// Palindromic Numbers: These are numbers that read the same forwards and backwards.
// 121
// 1331
// 12321

// function Palindrome(x) {
//   if (x < 0) {
//     return false; // Negative numbers cannot be palindromes
//   }
//   // Convert the number to a string to work with its individual digits
//   let str = x.toString();
//   let len = str.length;
//   // Loop through the string from both ends towards the center
//   for (let i = 0; i < len / 2; i++) {
//     // Compare characters at opposite positions in the string
//     // If they are not the same, return false (not a palindrome)
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// let num1 = 121;
// let str2 = "racecar";
// let num3 = -121;
// let num4 = 12321;

// console.log(Palindrome(num1)); // Output: true
// console.log(Palindrome(str2)); // Output: true
// console.log(Palindrome(num3)); // Output: false
// console.log(Palindrome(num4)); // Output: true

function isPalindrome(str) {
  // Remove spaces and non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const len = cleanStr.length;

  // Loop through the cleaned string from both ends towards the center
  for (let i = 0; i < len / 2; i++) {
    // Compare characters at opposite positions in the cleaned string
    // If they are not the same, return false (not a palindrome)
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

let str = "A men is driving a car";
let str2 = "A man, a plan, a canal, Panama";

console.log(isPalindrome(str2)); // Output: true
console.log(isPalindrome(str)); // Output: false
