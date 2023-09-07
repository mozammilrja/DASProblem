// // This function calculates the Fibonacci sequence using recursion.
// // It returns the Fibonacci number at the nth position.
// // The formula used is: F(n) = F(n-1) + F(n-2)

// function fibonacci(n) {
//   // Base case: if n is 1, return the first Fibonacci number (0).
//   if (n == 1) {
//     return 0;
//   }
//   // Base case: if n is 2, return the second Fibonacci number (1).
//   if (n == 2) {
//     return 1;
//   }
//   // Recursive case: For n > 2, calculate the Fibonacci number using the formula.
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Calculate and display the 14th Fibonacci number.
// const num = 14;
// console.log("Fibonacci number at position", num, "is:", fibonacci(num));

let a = 0;
let b = 1;
let temp = 0;
for (let i = 1; i < 10; i++) {
  console.log(a);
  temp = a + b;
  a = b;
  b = temp;
}
