// star pattern half pyramid  for left side

// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= i; j++){
//        document.write("*");
//     }
//     document.write("<br/>");
// }


// for right side
let x = 5;

for (let i = 1; i <= x; i++) {
  for (let k = 1; k <= x - i; k++) {
    document.write(" &nbsp;");
  }
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}

