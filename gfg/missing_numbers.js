var missingNumber = function (nums) {
    let len = nums.length + 1
    for (let j = 0; j < len; j++) {
        if (!nums.includes(j)) {
            return j
        }
    }
};


function getMissingNo(a, n) {
    let total = 1;

    for (let i = 2; i <= (n + 1); i++) {
        total += i;
        total -= a[i - 2];
    }
    return total;
}

let arr = [1, 2, 3, 5];
let N = arr.length;

// Function call
console.log(getMissingNo(arr, N));


function MissingNumber(array,n){
 const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array.reduce((acc, cur) => acc + cur, 0);
  return expectedSum - actualSum;   
  }



