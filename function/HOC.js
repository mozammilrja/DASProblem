let arr = [1, 2, 3, 4, 5];
let squaredArr = [];

for (let i = 0; i < arr.length; i++) {
    squaredArr.push(arr[i] * arr[i]);
}

// console.log(squaredArr); // Output: [1, 4, 9, 16, 25]


//  Method 2  map return a new array

const squaredArrOfNumbers = arr.map((num) => num*num)

// console.log(squaredArrOfNumbers, 'with map');


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtoDollar = 80


// const transactionsInUSD = transactions.map(amount => amount / inrtoDollar);
// // const transactionsInUSD = transactions.map(amount => (amount / inrtoDollar).toFixed(0)); without dicimal values


// console.log(transactionsInUSD);


//  Method 3  forEach is nothing to return


// const transactionsInUSD1 = transactions.forEach((amount) => {
//     // console.log((amount / inrtoDollar).toFixed(0));
// });

// ------------------------------------------------------------------------------------------------------//

// find method

const transactions2 = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// let  firsttWidrawl = transactions2.find((n) => n<0) 

// console.log(firsttWidrawl);



// findIndex method


// let firsttWidrawl = transactions2.findIndex((n) => n < 0)

// console.log(firsttWidrawl);


// some method return a boolean value


// every method return total value satisfied the condions a boolean value true and false




//  filter method you have to check for even numbers in an array and put them a seprate array


let numbers = [1, 2, 20, 35, 12, 17, 46]

let evenArr = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenArr.push(numbers[i])
        
    }
}

console.log(evenArr);

// with filter method


const findEven = transactions2.filter((n) => n>=0)
// const findEven = numbers.filter((n) => n % 2 == 0)

console.log(findEven,'findEven');


// Redice method

let num = [1, 2, 3, 5, 6]

let sum = 0

for (let i = 0; i < num.length; i++) {
     sum = sum+num[i];
    
}
console.log(sum);


const sumofNumbers = num.reduce((a, b) => a + b)

console.log(sumofNumbers,'reduce method');