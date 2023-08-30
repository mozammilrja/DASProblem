// using recusrion n numers

function fibonacci(n) {
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// const num =  prompt("enter the numbers:")
const num = 20;

console.log(fibonacci(num));

// nth number of fibonacci series using for loop
// const num = prompt("enter the numbers:")

// let n1 = 0, n2 = 1, result;

// for (let i = 1; i <= num; i++) {
//     console.log(n1);

//     result = n1 + n2;

//     n1 = n2;
//     n2 = result;

// }
