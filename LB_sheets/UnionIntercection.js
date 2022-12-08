function findCommonElem(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}


var a = [89, 24, 75, 11, 23];
var b = [89, 2, 4];

console.log(findCommonElem(a, b)); // [2, 4, 6, 8, 10];





function Rotate(arr) {
    var lastElem = arr.length - 1;
    for (let i = arr.length; i > 0; i--) {
        arr[i] == arr[i-1]
    }
    arr[0] = lastElem;
}

var rotate = [1, 2, 3, 4, 5]


console.log(Rotate(rotate));


function rotate(arr, n) {
    var x = arr[n - 1], i;
    for (i = n - 1; i > 0; i--)
        arr[i] = arr[i - 1];
    arr[0] = x;
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;
rotate(arr, n);
for (var i = 0; i < n; i++)
    
    console.log(arr[i] + " ");

