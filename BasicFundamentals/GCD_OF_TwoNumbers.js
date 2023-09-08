// function gcd(a, b) {
//   // Ensure both a and b are positive integers
//   a = Math.abs(a);
//   b = Math.abs(b);

//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }

//   return a;
// }

// const num1 = 48;
// const num2 = 18;

// const result = gcd(num1, num2);
// console.log(`GCD of ${num1} and ${num2} is: ${result}`);

//  recursively method
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Example usage:
const num1 = 48;
const num2 = 18;
const result = gcd(num1, num2);

console.log(`GCD of ${num1} and ${num2} is: ${result}`);
