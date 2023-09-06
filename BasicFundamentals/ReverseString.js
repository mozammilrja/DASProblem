// reverse the string of characters
// function reverse(str) {
//   const numStr = num.toString();

//   let res = numStr.split("").reverse().join("");
//   return res;
// }

// let result = 100;
// console.log(reverse(result));
function reverseNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Reverse the string
  const reversedStr = numStr.split("").reverse().join("");

  // Convert the reversed string back to a number
  //   const reversedNum = parseInt(reversedStr, 10);

  return reversedStr;
}

const originalNumber = 12345;
const reversedNumber = reverseNumber(originalNumber);
console.log(`Original Number: ${originalNumber}`);
console.log(`Reversed Number: ${reversedNumber}`);
