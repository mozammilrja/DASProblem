function sumOf3Numbers(a, b, c) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  for (let j = 0; j < b.length; j++) {
    sum += b[j];
  }
  for (let k = 0; k < c.length; k++) {
    sum += c[k];
  }
  return sum;
}

let num = [1, 2, 3, 4, 5];
let num2 = [1, 2, 3, 4, 5];
let num3 = [1, 2, 3, 4, 5];

console.log(sumOf3Numbers(num, num2, num3));
