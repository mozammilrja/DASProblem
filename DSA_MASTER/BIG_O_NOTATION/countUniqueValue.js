function countUniqueValue(arr) {
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(j, i)

    }
    return i + 1;
}

console.log(countUniqueValue([1, 3, 3, 3, 33, 9, 5, 9, 9, 9]))