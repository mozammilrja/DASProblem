const Num1 = prompt("enter the first numbers:");
const Num2 = prompt("enter the second numbers:");
const Num3 = prompt("enter the third numbers:");

let largest;

if (Num1 >= Num2 && Num1 == Num3) {
  largest = Num1;
} else if (Num2 >= Num && Num2 >= Num3) {
  largest = Num2;
} else {
  largest = Num3;
}
document.write("the largest numbers is:" + largest);
