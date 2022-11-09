// LCM Calculation Using HCF

let result;
const n1 = prompt("enter the numbers n1")
const n2 = prompt("enter the numbers n2")

for (let i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {

        result = i;
    }

}

const lcm = (n1 * n2) / result


console.log(`hcf of ${n1} and  ${n2} is ${lcm}`);
