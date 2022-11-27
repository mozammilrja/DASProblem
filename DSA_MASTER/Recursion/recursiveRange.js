    // addion possible this method not multiply
function Range(n) {
    if (n === 0) return 0
    return n + Range(n-1)
}
console.log(Range(5));