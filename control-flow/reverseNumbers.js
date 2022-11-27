// console.log(
//     +prompt("Enter a value").split("").reverse().join("")
// )


// function reverseWord(str){
//     //Your code here
//     return str
//         .split("")
//         .reverse()
//         .join("");
// }
// var s = "Geeks"
// console.log(reverseWord(s))



function areEqual(n) {


    let A = arr1.length
    let B = arr2.length

    arr1.sort()
    arr2.sort()

    for (let i = 0; i < n; i++) 
        if(arr1[i] != arr2[i])
            return false
    return true;
    
}

let arr1 = [1, 2, 5, 4, 0]

let arr2 = [0, 1, 2, 4, 1]

    areEqual(arr1, arr2) ? console.log("Yes") : console.log("No")


