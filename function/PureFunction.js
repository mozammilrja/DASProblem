function PureFunctions(x,a) {
    console.log(x+a) //side effect on function
}

PureFunctions(3,4)

function PureFunctions(x, a) {
    return a + x

}

console.log(PureFunctions(3, 4))