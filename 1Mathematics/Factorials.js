// Recursive function to calculate the factorial of a number
function Factorials(num) {
  if (num < 0) {
    return -1; // Factorial is not defined for negative numbers
  }
  if (num === 0) {
    return 1; // The factorial of 0 is defined as 1
  }
  // Recursive formula: num! = num * (num - 1)!
  return num * Factorials(num - 1);
}
let num = 10;
console.log(Factorials(num));

// function calculateFactorial(num) {
//   if (num < 0) {
//     return -1;
//   }

//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// let num = 100000;
// console.log(calculateFactorial(num)); // output infinity for this number
