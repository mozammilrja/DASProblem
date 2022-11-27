// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right]
//         if (sum === 0) {
//             return [arr[left] , arr[right]]
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
    
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))

function countUniqueValue(arr) {
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
       if (arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j]
        }
        console.log(j,i)
        
    }
    return i + 1;
}

console.log(countUniqueValue([1,3,3,3,33,9,5,9,9,9]))