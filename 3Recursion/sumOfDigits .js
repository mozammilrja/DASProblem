// function sumOfDigits(num) {
//   if (num < 10) {
//     return num;
//   }
//   return (num % 10) + sumOfDigits(Math.floor(num / 10));
// }

// const num = 12345;
// console.log(sumOfDigits(num));

// This recursive function calculates the sum of digits of a number.
// It breaks down the number into its individual digits and adds them together.
// The formula used is: Sum of digits = last digit + Sum of digits in the remaining part of the number

function sumOfDigits(num) {
  // Base case: If the number is a single-digit number, return the number itself.
  if (num < 10) {
    return num;
  }
  // Recursive case:
  // 1. Calculate the last digit of the number (num % 10).
  // 2. Recursively call the sumOfDigits function with the remaining part of the number (num // 10).
  // 3. Add the last digit to the sum of digits in the remaining part.
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

// Example usage: Calculate and display the sum of digits for the number 12345.
const num = 12345;
console.log("Sum of digits in", num, "is:", sumOfDigits(num));
