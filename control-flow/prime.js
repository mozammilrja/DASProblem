// const isPrime  = (n) => {
//     if (n <= 1){
//         return false
//     }
//     for (let i = 2; i < n; i++){
//         if (n % i == 0) {
//             return false
//         }
//         return true
//     }

// }


// isPrime(1) ? console.log("is prime number") : console.log("  is not prime number");


// const isPrime = (n) => {
//     if (n <= 1) {
//         return false
//     }
//     if (n == 1 || n == 2) {
//         return true
//     }
//     if (n % 2 == 0 || n % 3 == 0) {
//         return false
//     }
//     for (let i = 5; i <= Math.sqrt(n); i = i+6) {
//         if (n % i == 0 || n % (i+2) ==0) {
//             return false
//         }
//         return true
//     }

// }


// isPrime(41) ? console.log("is prime number") : console.log("  is not  prime number");



//  prime numbers 1 to n numbers


const isPrime = (n) => {
    if (n == 1 || n == 0) {
        return false
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

    var numbers = 30;
    for (let i = 1; i <= numbers; i++){
        if (isPrime(i)) {
            console.log(i)
        }
    }

