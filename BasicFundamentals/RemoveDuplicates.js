function RemoveDuplicateNumbers(num) {
  const numStr = new Set(num);
  return numStr;
}
let numStr = [
  2, 3, 4, 9, 9, 9, 9, 5, 5, 5, 5, 6, 7, 8, 9, 9, 9, 9, 99, 10, 11, 12,
];

console.log(RemoveDuplicateNumbers(numStr));
