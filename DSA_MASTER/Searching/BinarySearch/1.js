// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2)
//     while (arr[middle] !== elem && start <= end) {
//         if (elem < arr[middle]) end = middle - 1;
//      else start = middle + 1;
//      middle = Math.floor((start + end) / 2)
//     }
//     return arr[middle] === elem ? middle : -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 4))


function minDist(arr, n, x, y) {
    // var i, j;
    // var min_dist = Number.MAX_VALUE;

    // for (i = 0; i < n; i++) {
    //     for (j = i + 1; j < n; j++) 
    //         if ((x == arr[i] && y == arr[j] || y == arr[i] && x == arr[j]) && min_dist > Math.abs(i - j)) min_dist = Math.abs(i - j);
        
    // }

    // return min_dist > n ? -1 : min_dist
    
    // previous index and min distance
    var i = 0, p = -1, min_dist = Number.MAX_VALUE;

    for (i = 0; i < n; i++) {
        if (arr[i] == x || arr[i] == y) {
            if (p != -1 && arr[i] != arr[p]) min_dist = Math.min(min_dist, i - p); p = i;
        }
    }
    return min_dist === Number.MAX_VALUE ? -1 : min_dist    
}


// Driver code
var arr = [3, 5, 4, 2, 6, 5,6, 6, 5, 4, 8, 3];
var n = arr.length;
var x = 3;
var y = 6
console.log(("Minimum distance between " + x + " and " + y + " is " + minDist(arr, n, x, y)));

