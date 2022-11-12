let n = 100;
let total = n.length;
let sum = 0;
let temp = n

while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder ** total
    temp = parseInt(temp / 10)
}

if (temp == n) {
    console.log(n,'armstrong');
}