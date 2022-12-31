// infinite curring ask in walmart
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a
    }
}


console.log(add(2)(3)(6)())

// simple curring example
function add(a) {
    return function (b) {
        return function c(c) {
            return a + b + c;
        }
    }
    
}
console.log(add(2)(3)(4))
