// map filter and reduce

// map polyfill

Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const nums = [1, 2, 3, 4]

const multiply = nums.myMap((nums, i, arr) => {

    return nums * 3
})


console.log(multiply);

// --------------------------------------------------------------------------//
// filter polyfill

// Array.prototype.myFilter = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i],i,this)) temp.push(this[i])
//     }
//     return temp;
// }

// const nums = [1, 2, 3, 4]

// const moreThanTwo = nums.myFilter((nums) => {

//     return nums > 2
// })


// console.log(moreThanTwo);


// --------------------------------------------------------------------------//


// reduce polyfill

// Array.prototype.myReduce = function (cb, intialValue) {
    
//     var accumulator = intialValue
//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator,this[i], i, this) : this[i]
//     }
//     return accumulator;
// }

// const nums = [1, 2, 3, 4]

// const moreThanTwo = nums.myReduce((acc,curr,i,arr) => {

//     return acc + curr;
// },0)


// console.log(moreThanTwo);


// map vs forEach


const arr = [2,5,3,4,7]

const mapResult = arr.map((arr) => {
    return arr + 2;
})

const forEachResult = arr.forEach((arr) => { //never return value in forEach
    return arr + 2;
})

console.log(mapResult, forEachResult);
