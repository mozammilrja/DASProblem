// Function to calculate the N-th Fibonacci number
function fibonacci(n) {
  // Base case: If n is 0 or 1, return n
  if (n <= 1) {
    return n;
  }
  // Recursive case:
  // Calculate the N-th Fibonacci number using the formula F(n) = F(n - 1) + F(n - 2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Define the value of N for which we want to calculate the Fibonacci number
let n = 10;

// Calculate and print the N-th Fibonacci number
console.log(fibonacci(n));
