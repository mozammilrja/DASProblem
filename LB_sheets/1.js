function findSum(a, n) {
    //code here

    var max = a[0], min = a[0];

    for (var i = 1; i < n; i++) {
        if (a[i] > max) {
            max = a[i];
        }
        if (a[i] < min) {
            min = a[i];
        }
    }
    return max + min;

}
var arr = [-2, 1, 4, 5, 3]
console.log(findSum(arr))