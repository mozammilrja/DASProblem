

// for (let i = 5; i >= 1; i--) {

//     for (let k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;")

//     }

//     for (let j = 1; j <= i; j++) {
//         document.write("x ")

//     }
//     document.write("<br/>")


// }

let x = 10

for (let i = x; i >= 1; i--) {
    for (let k = 1; k <= x - i; k++) {
        document.write("&nbsp &nbsp;")

    }
    for (let j = 1; j <= i; j++) {
        document.write("* ")
    }
    for (let l = 1; l <=i-1; l++) {
        document.write("* ");
        
    }
    document.write("<br/>")


}