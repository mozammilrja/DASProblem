// // program to find the HCF or GCD of two integers


let result;
const n1 = prompt("enter the numbers n1")
const n2 = prompt("enter the numbers n2")

for (let i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {

        result = i;
    }

}


console.log(`hcf of ${n1} and  ${n2} is ${result}`);



// Recursive function to return gcd of a and b
// A more efficient solution is to use modulo operator in Euclidean algorithm. 

// function gcd(a, b) {
//     if (b == 0)
//         return a;

//     return gcd(b, a % b);

// }

// const a = prompt("a")
// const b = prompt("b")
// // var a = 98, b = 56;

// const result = (a, b)


// console.log ("GCD of " + a + " and " + b + " is " + gcd(a, b));