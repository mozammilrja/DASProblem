// function containsCommanItems(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) return true
//         }
//     }
//     return false
// }

// const arr1 = ['a', 'b', 'c', 'x']
// const arr2 = ['z', 'y', 'x']

// console.log(containsCommanItems(arr1, arr2));


// big o  o(n^2) time complexity
// o(1) space complexity


// method two 

// function containsCommanItems(arr1, arr2) {
//     let result = {};
//     for (let i = 0; i < arr1.length; i++) {
//         if (!result[arr1[i]]) {
//             const item = arr1[i]
//             result[item] = true
//         }
//     }
// for (let j = 0; j < arr2.length; j++) {
//     if (result[arr2[j]]) return true  
//     }
//     return false
// }

const arr1 = [2,3,4,5]
const arr2 = [12, 13, 14, 5]
// // const arr1 = ['a', 'b', 'c', 'm']
// // const arr2 = ['z', 'y', 'x']


// console.log(containsCommanItems(arr1, arr2));

// big o  o(a+b) time complexity
// o(a) space complexity


// method 3

const containsCommanItems = (arr1,arr2) => {
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommanItems(arr1, arr2));

// big o  o(1) time complexity
// o(1) space complexity
