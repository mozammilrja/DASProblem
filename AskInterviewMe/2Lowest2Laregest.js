// Find the second lowest and second largest element in an array

var   arr = [111, 13, 25, 9, 34, 1];
function lowestLargest(arr) {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]]

}
console.log(lowestLargest(arr));