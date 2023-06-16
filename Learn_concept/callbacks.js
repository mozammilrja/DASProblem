// normal function like mesy code



function compute(action, x, y) {
    if (action === "divide") {
        return x / y
    } else if (action === "multiply") {
        return x * y
    } else if (action === "add") {
        return x + y
    } else if (action === "modulus") {
        return x % y
    }
}

console.log(compute("divide", 10, 5))    // 2
console.log(compute("multiply", 10, 5))  // 50
console.log(compute("add", 10, 5))       // 15
console.log(compute("modulus", 10, 5))   // 0




// write a better way code

function divide(x, y) {
    return x / y
}

function multiply(x, y) {
    return x * y
}

function add(x, y) {
    return x + y
}

function compute(callBack, x, y) {
    return callBack(x, y)
}

console.log(compute(divide, 10, 5))    // 2
console.log(compute(multiply, 10, 5)) // 50
console.log(compute(add, 10, 5)) // 50

