// To print numbers from N to !
// function PrintNumbers(n) {
//   if (n < 1) {
//     return;
//   }
//   console.log(n);
//   PrintNumbers(n - 1);
// }

// console.log(PrintNumbers(5));

// To print numbers from 1 to N
function PrintNumbers(n) {
  if (n > 0) {
      PrintNumbers(n - 1);
      console.log(n);
  }
}

console.log(PrintNumbers(5));
