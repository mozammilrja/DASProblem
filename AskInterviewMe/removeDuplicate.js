// var arr = [2, 2, 5, 5, 7, 8, 3, 5, 60, 5, 7, 8]


// // var arr = ["apple", "mango", "apple",
// // 		"orange", "mango", "mango"];

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));



// 00055544299992338
// output 054938
// const str = "00055544299992338"
var str = [2, 2, 5, 5, 7, 8, 3, 5, 60, 5, 7, 8]

function removeDuplicate(str) {
    const convertArr = str.split('')
    let result = convertArr.filter((val, index) => {
        return convertArr.indexOf(val) == index
    })
    return result.join('')
}


console.log(removeDuplicate(str));




// remove duplicate with count value

var str = [2, 2, 5, 5, 7, 8, 3, 5, 60, 5, 7, 8]
function removeDuplicate() {

    let result = str.filter((val, index) => {
        return str.indexOf(val) === index
    })
    const countResult = {}
    result.forEach(res => {
        countResult[`count_of ${res}`] = 0
    }
    )

    for (let i of str) {
        result.forEach(res => {
            if (res === i) countResult[`count_of ${res}`] += 1
        })
    }

    return { result, countResult }
}
console.log(removeDuplicate(str));



var arr = [2, 2, 5, 5, 7, 8, 3, 5, 60, 5, 7, 8]

function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates(arr));