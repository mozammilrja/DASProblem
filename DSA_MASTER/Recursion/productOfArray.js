// function productArr(arr,n) {
//     let result = 1
//     for (let i = 0; i < n; i++)
//         result = result * arr[i]
//         return result
// }
// let arr = [1, 2, 3, 4, 5]
// let n = arr.length
// console.log(productArr(arr,n))

function productOfArray(arr) {

    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
let arr = [1, 2, 3, 4, 5, 6]
console.log(productOfArray(arr))