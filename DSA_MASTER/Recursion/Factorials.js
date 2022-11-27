// recusive solutions
function Factorial(n) {
    if (n === 0) return 1;
    return n * Factorial(n - 1);
}
console.log("The factorial of " + Factorial(9));

// non recursive solution

function Factorial2(num) {
    var total = 1
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

console.log("The factorial of " + Factorial2(3));