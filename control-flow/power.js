// // using recursion

// function power(x,n) {
//     if (n == 0)
//         return 1;
//     if (x == 0)
//         return 0
//     return x * power(x,n - 1)
    
// }

// // const x = 2;
// // const n = 3;

// console.log(power(2, 3,'run'));

function isPowerOfTwo(n) {
    if (n == 0)
        return 0;
    while (n != 1) {
        if (n % 2 != 0)
            return 0;
        n = n / 2;
    }
    return 1;
}

isPowerOfTwo(1) ? document.write("Yes" + "</br>") : document.write("No" + "</br>");
isPowerOfTwo(64) ? document.write("Yes") : document.write("No");