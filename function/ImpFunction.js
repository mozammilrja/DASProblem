// let a = 2 // same results

// Bescouse only extarnal factor var defined?

var a = 2 // same results  
// Update header text
function addImpureFunction(x) {

    console.log(x + a)
    a++

}
addImpureFunction(2)  // 4
addImpureFunction(2)  // 5
addImpureFunction(2)  // 6
addImpureFunction(2)  // 7

