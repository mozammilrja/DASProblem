// Factorialize a Number With Recursion

function Factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
    // If the number is 0, its factorial is 1.
  } else if (num == 0) {
    return 1;
    // Otherwise, call the recursive procedure again
  } else {
    return num * Factorialize(num - 1);
  }
}
console.log(Factorialize(10))
