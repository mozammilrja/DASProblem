
// program to find the HCF or GCD of two integers

const number1 = parseInt(prompt("enter the numbers1:"))
const number2 = parseInt(prompt("enter the numbers2:"))

let hcf 
for(let i = 1; i<=number1 && i<=number2; i++){
    if(number1 % i == 0 && number2 %i == 0 ){
       
        hcf = i;

    }
}

let lcm = (number1 * number2) / hcf;
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
