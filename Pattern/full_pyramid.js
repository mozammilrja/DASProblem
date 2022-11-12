let x = 5;

// for (let i = 1; i <= x; i++) {
//     for (let k = 1; k <= x - i; k++) {
//         document.write(" &nbsp;");
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     for (let l = 2; l <=i; l++) {
//         document.write("*");
        
//     }
//     document.write("<br/>");
// }

// method 2
for (let i = 1; i <= x; i++) {
    for (let k = 1; k <= x - i; k++) {
        document.write(" &nbsp;");
    }
    for (let j = 1; j <= x; j++) {
        document.write("*");
    }
     x = x+2
    document.write("<br/>");
}