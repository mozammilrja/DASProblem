function SubArray(arr) {
    var maxSum = 0;
    var currSum = 0;

    for (var i = 0; i < arr.length; i++) {
        currSum = currSum + a[i]
        if (maxSum < currSum)
            maxSum = currSum

        if (currSum < 0)
            currSum = 0
    }
    return maxSum
}


var a = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(SubArray(a))