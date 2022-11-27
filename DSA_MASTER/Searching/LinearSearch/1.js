// exp -1

// const arr = [5, 8, 1, 100, 12, 3, 12]
// const findResult = arr.find(element => element === 12)

// console.log(findResult);


// exp -2

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i
    }
    return -1

}
console.log(linearSearch([5, 8, 1, 100, 12, 3, 12], 12));
    
// Time Complexity: O(n)

// Space Complexity: O(1)


