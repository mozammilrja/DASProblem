// function kth(arr, k) {
//     arr.sort((a, b) => a - b)
//     return arr[k - 1]
// }
// let arr = [12, 3, 5, 7, 19];
// let l = arr.length, K2 = 2;
// console.log("K'th smallest element is " + kth(arr, K2));





function getMissingNo(nums) {
    let len = nums.length + 1
    for (let j = 1; j < len; j++) {
        if (!nums.includes(j)) {
            return j
        }
    }
}

let arr = [1, 2, 3, 5,7];
let N = arr.length;

// Function call
console.log(getMissingNo(arr, N));