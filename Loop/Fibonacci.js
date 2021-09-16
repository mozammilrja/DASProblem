

// // JavaScript Program to Print the Fibonacci Sequence
// // A fibonacci sequence is written as:

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// // The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
// // After that, the next term is defined as the sum of the previous two terms.

// program to generate fibonacci series up to n terms
const number = parseInt(prompt("enter the numbers:"))

let n1 = 0, n2 =1, nextTerm;

console.log("Fibonacci Sequence");

for(let i = 1; i<=number; i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
}
