// function FirstName(Fname, cb) {
//   console.log(Fname);
//   cb('Mozammil');
// }
// function LastName(Lname) {
//   console.log(Lname);
// }

// FirstName('Raja', LastName);

function isEven(n) {
    return n % 2 === 0
}
function Result(evenFun, num) {
    const isNumEven = evenFun(num)
    console.log(`The numbers ${num} is an  even numbers ${isNumEven} `);

}

Result(isEven, 14)
