
function Union(a, n, b, m) {
    var mp = new Map();

    for (let i = 0; i < n; i++) {
        mp.set(a[i], i);
    }
    for (let i = 0; i < m; i++) {
        mp.set(b[i], i);
    }

    console.log("union");
    for (const key of mp.keys()) {
        console.log(key);
    }
}

var a = [1, 2, 5, 6, 2, 3, 5];
var b = [2, 4, 5, 6, 8, 9, 4, 6, 5];

// console.log();
Union(a, 7, b, 9)