// using recursion

function power(x,n) {
    if (n == 0)
        return 1;
    if (x == 0)
        return 0
    return x * power(x,n - 1) 
    
}

// const x = 2;
// const n = 3;

console.log(power(2, 3,'run'));