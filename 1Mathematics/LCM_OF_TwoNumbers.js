// Function to calculate the GCD (Greatest Common Divisor)
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Function to calculate the LCM (Least Common Multiple)
function lcm(a, b) {
  // Calculate LCM using the GCD formula: LCM(a, b) = (a * b) / GCD(a, b)
  return (a * b) / gcd(a, b);
}

const num1 = 48;
const num2 = 18;
const result = lcm(num1, num2);

console.log(`LCM of ${num1} and ${num2} is: ${result}`);
