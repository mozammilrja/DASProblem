function Factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}
let n = 6;
answer = Factorial(n);
console.log("The factorial of " + n + " is " + answer);