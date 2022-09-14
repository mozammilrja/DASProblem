function checkPalindrome(x) {
    let convertedNumber = x.toString();
    let reverseString = convertedNumber.split("").reverse().join("");
    return reverseString === convertedNumber ? "Yes" : "No"
}

let num = 12321;
let num2 = 456;
console.log(checkPalindrome(num)); //yes
console.log(checkPalindrome(num2)); //no


// -------------------

function Palindrome(str) {
    const len = String.length;
  // loop through half of the string
    for (let i = 0; i < len / 2; i++){
        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'it is not palindrome'
        }
    }
    return " it is a Palindrome"
}

let num3 = "endenfnEFNSDKNWKND"

console.log(Palindrome(num3));

// A function to check if n is palindrome given range

//  Math.trunc remove fraction digit 12.66 remove .66

function isPalindrome(n) {
  // Find reverse of n
  let rev = 0;
  for (let i = n; Math.trunc(i) > 0; i /= 10) {
    rev = rev * 10 + Math.trunc(i % 10);
  }
  // If n and rev are same, then n is palindrome
  return n == rev;
}

// prints palindrome between min and max

function countPalindrome (min,max) {
    for (let i = min; i <= max; i++){
        if (isPalindrome(i)) {
            console.log(i)
        }
    }
}

 countPalindrome(10, 50);
    
