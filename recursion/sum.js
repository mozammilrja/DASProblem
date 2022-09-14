
function sumOf(num) {
    if (num > 1) {
        return num + sumOf(num-1)
    } else {
        return num
    }
}

const result = sumOf(4)
console.log(result);