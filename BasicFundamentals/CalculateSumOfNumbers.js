function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [2, 4, 56, 6, 7];
console.log(calculateSum(arr));
