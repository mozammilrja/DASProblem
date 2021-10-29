// program to find the factorial of a number

const numbers = parseInt(prompt("enter the numbers of factorilas:"))

if(numbers < 0){
    console.log("factorilas does not exist nagative numbers");
}

else if(numbers === 0){
    console.log(`factorilas value ${numbers} is 1`);
}
else{
    let fact = 1
    for(i = 1; i<=numbers; i++){
        fact *=i
    }
    console.log(`The factorial of ${numbers} is ${fact}.`);
}
