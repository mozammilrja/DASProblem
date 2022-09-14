// Find the element that appears once in an array where every other element appears 0nce
// Time Complexity: O(n)

// Input:  arr[] = {2, 3, 5, 4, 5, 3, 4}
// Output:

function findSingle(ar, ar_size) {
  // Do XOR of all elements and return
  // let res = ar[0];
  //   for (let i = 1; i < ar_size; i++){
  //       res = res ^ ar[i];
  //   }
  //   return res;
}

// Driver code
// let ar = [2, 3, 5, 4, 5, 3, 4];
// let n = ar.length;
// console.log(findSingle(ar, n));

// ------------------------------------------

//trailing zeros in factorials numbers

let res = 0;

function zeros(n) {
  // var result = 0;
  // while ((n = Math.floor(n / 5))) result += n;
  // return result;
  for (let i = 5; i <= n; i = i * 5) {
    resutl = res + n / i;
  }
  return res;
}
console.log(zeros());
