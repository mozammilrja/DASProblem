// const Factorials = (n) => {
//     return (n == 1 || n == 0) ?  1 : n * Factorials(n-1)
// }

// console.log(Factorials(3))


// function fact(n) {
//     if (n == 0) {
//         return 1
//     } else {
//         return n * fact (n-1)
//     }
// }

// const num = prompt("enter the numeber:")

// if (num >= 0) {
//     const result = fact(num)
//     console.log(result)
// }

// second example
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));