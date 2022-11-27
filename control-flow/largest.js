// program to find the largest among three numbers

// take input from the user
let arr = [3, 6, 2, 56, 32, 5, 89, 32];

let largest = 0

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
         largest = arr[i]
    
}    
}



// display the result
console.log("The largest number is " + largest);


const arr1 = [3, 6, 2, 56, 32, 5, 89, 32];

const min = Math.min(...arr1)
console.log("The smallest number is " + min);