
// formula n*(n+1)/2

// sum of all array list

const arr = [2, 4, 56, 6, 7]

const output = arr.reduce((acc, curr) => acc + curr)
console.log(output);


function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1
    }
    return total;
}

console.log(addUpTo(100),'first');
    


function addUpTo(num) {
    if (num > 1) {
        return num + sumOf(num - 1)
    } else {
        return num
    }
}

const result = addUpTo(4)
console.log(result,'second');


function addUpTo(n) {
    return n * (n+1)/2
}

let t2 = performance.now()

console.log(t2, 'first');
console.log(addUpTo(5 ), 'third');
let t1 = performance.now()

console.log(t1, 'first');