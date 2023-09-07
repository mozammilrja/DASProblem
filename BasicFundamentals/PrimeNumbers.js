// // Function to check if a number is prime
function isPrime(n) {
  // Prime numbers are greater than 1, so return false for non-positive integers
  if (n <= 1) {
    return false;
  }

  // Start checking for factors from 2 up to n-1
  for (let i = 2; i < n; i++) {
    // If n is divisible by any number in this range, it's not prime
    if (n % i == 0) {
      return false;
    }
  }

  // If no factors were found in the loop, n is prime
  return true;
}

let n = 17;
console.log(isPrime(n));

// Function to check if a number is prime
// function isPrime(n) {
//   // Prime numbers are greater than 1, so return false for non-positive integers
//   if (n <= 1) {
//     return false;
//   }

//   // Start checking for factors from 2 up to the square root of n
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     // If n is divisible by any number in this range, it's not prime
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   // If no factors were found in the loop, n is prime
//   return true;
// }

// // Find and print prime numbers up to 17
// const limit = 17;
// for (let i = 2; i <= limit; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
