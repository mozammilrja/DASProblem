// function sumOfTwoNumbers(a, b, c) {
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   for (let i = 0; i < b.length; i++) {
//     sum += b[i];
//   }
//   for (let k = 0; k < c.length; k++) {
//     sum += c[k];
//   }
//   return sum;
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let result = sumOfTwoNumbers(array1, array2, array3);

// console.log(result); // Output will be 21 (1 + 2 + 3 + 4 + 5 + 6)

function sumOfTwoNumbers(a, b, c) {
  return a + b + c;
}
let n1 = 10;
let n2 = 20;
let n3 = 30;

console.log(sumOfTwoNumbers(n1, n2, n3));
