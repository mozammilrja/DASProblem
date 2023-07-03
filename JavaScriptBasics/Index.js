// Reverse a string.
// function reverseString(str) {
//   const reverseStr = str.split("").reverse().join("");
//   return reverseStr;
// }

// console.log("reverseString", reverseString("mozammil"));

// Find the largest number in an array.

// function largestNumber(num) {}

// const maxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const result = maxNumber.reduce((a,b) => Math.max(a,b))
// console.log(result,'1');

// const result2 = Math.max(...maxNumber)
// console.log(result2,'2')

// Find the sum of all numbers in an array.

// const sum = [1, 2, 3];

// const result = sum.reduce((a, b) => a + b);

// console.log(result,'1');

// Capitalize the first letter of each word in a string.

// const words = ["abc", "def", "else", "elseif", "amp"];

// const result = words.map(
//   (word) => word.charAt(0).toUpperCase() + word.slice(1)
// );
// console.log(result, "1");

// Merge two sorted arrays into a single sorted array.

// const arr1 = [4, 5, 7, 8, 1, 2, 3];
// const arr2 = [1, 2, 3, 5, 6, 7, 8, 9, 4, 5, 61, 34];
// const arr3 = [67, 344, 666, 63, 44];
// const arr4 = [641, 344, 666, 373, 440];
// const arr5 = [617, 346, 666, 363, 434];
// const arr6 = [61, 34, 646, 33, 443];
// const arr7 = [61, 34, 664, 336, 445];

// // Merge the two arrays
// const merged = arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7);

// // Sort the merged array in ascending order
// merged.sort((a, b) => a - b);
// const duplicateRemove = new Set(merged);
// console.log(duplicateRemove);

// Check if two arrays are equal.

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const rrr = arr1.length === arr2.length ? "equal" : "not equal";
// console.log(rrr);

// if (arr1.length === arr2.length) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// Remove duplicate elements from an array.

// const arr1 = ["Aman", "Bman", "Cman", "Dman", "Eman", "Fman", "Gman", "Bman"];

// const result = new Set(arr1);

// console.log(result);

// Find the longest word in a string

// function findLongestWord(str) {
//   let strSplit = str.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord.length) {
//       longestWord = strSplit[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Find the intersection of two arrays.

// const findIntersection = (arr, arr2) => {
//   result = arr.filter((i) => arr2.includes(i));
// };

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];
// const intersection = findIntersection(arr, arr2);
// console.log(intersection); // Output: [4, 5]

function findIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((value) => set2.has(value));
  //   return arr1.filter((value) => arr2.includes(value));
}

const arr = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const intersection = findIntersection(arr, arr2);
// console.log(intersection, "resutl"); // Output: [4, 5]

// var isAnagram = (s, t) => {
// return  s.split("").sort().join("") === t.split("").sort().join("");
// };

// console.log(isAnagram("anagram", "nagaram"));

// const myArray = [1, 2, 3, 4, 5];

// for (const element in myArray) {
//   console.log(element,'in');
// }

// for (const element of myArray) {
//   console.log(element,'of');
// }

// var isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//   const map = new Map();
//   for (const c of s) {
//     if (map.has(c)) map.set(c, map.get(c) + 1);
//     else map.set(c, 1);
//   }

//   for (const c of t) {
//     if (!map.has(c)) return false;
//     map.set(c, map.get(c) - 1);
//       if (map.get(c) === 0) map.delete;
//       if (map.get(c) === 0) map.delete(c);
//   }

//   if (map.size > 0) return false;

//   return true;
// };

// console.log(isAnagram("anagram", "nagaram"));

// function prime(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = array[i];

//     }
// }
// Find the factorial of a number.

// let num = 2225;
// let factorials = [];
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//   factorial *= i;
//   factorials.push(factorial);
// }
// console.log(factorial, "factorial");

// const numbers = 120;
// const res = 0;
// for (let i = 5; i <= numbers; i = i * 5) {
//     res + numbers/i;
// }

// console.log(res, "res");

// start

// const arr2 = [];

// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] === a[j] && !arr2.includes(a[i])) {
//       arr2.push(a[i]);
//     }
//   }
// }

// arr2.sort((a, b) => a - b);

// Check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a factor, not a prime number
    }
  }

  return true; // No factors found, it is a prime number
}

const num = 37;
// console.log(isPrime(num)); // Output: true

// Remove a specific element from an array.

// function swapNumber(a, b) {
//   [a, b] = [b, a];
//   return [a, b];
// }

// let x = 5;
// let y = 10;

// console.log(`swapNumber between ${x} and ${y}`);

// [x, y] = swapNumber(x, y);

// console.log(`swapNumber between x= ${x} and y= ${y}`);

// function swapNumbers(a, b) {
//   return [b, a];
// }

// // Example usage:
// let x = 5;
// let y = 10;
// console.log(`Before swap: x = ${x}, y = ${y}`);

// [x, y] = swapNumbers(x, y);
// console.log(`After swap: x = ${x}, y = ${y}`);

// Reverse the order of words in a string

function reverseWords(str) {
  let reversedString = "";
  let word = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      // If the character is not a space, prepend it to the word
      word = str[i] + word;
    } else {
      // If the character is a space, add the word to the reversed string
      reversedString += word + " ";
      word = "";
    }
  }

  // Add the last word to the reversed string
  reversedString += word;

  return reversedString;
}

// Example usage:
// const sentence = "Hello, how are you?";
// const reversedSentence = reverseWords(sentence);
// console.log(reversedSentence);

// function reverseWords(str) {
//   const reversedString = str.split(" ").reverse().join(" ");
//   return reversedString;
// }
// console.log(reverseWords("Hello, how are you?"));

// Find the number of vowels in a string.
// function findVowels(str) {
//   if (
//     str.includes("a") ||
//     str.includes("e") ||
//     str.includes("i") ||
//     str.includes("o") ||
//     str.includes("u")
//   ) {
//     return "vowels";
//   } else {
//     return "not in vowels";
//   }
// }

// console.log(findVowels("hello world"));

// function findVowels(str) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) !== -1) {
//       return "vowels";
//     }
//   }
//   return "no vowels";
// }

// console.log(findVowels("hello world"));

// function removeFalsyValues(arr) {
//   return arr.filter(Boolean);

// }

// var array = [0, 1, false, true, "", "hello", null, undefined, NaN];

// console.log(removeFalsyValues(array));

// Calculate the average of numbers in an array

// function avrageOfNumber(arr) {
//   const sum = arr.reduce((a, b) => a + b, 0);
//   var average = sum / arr.length;
//   return average;
// }

// var numbers = [2, 4, 6, 8, 10];
// var averageResult = avrageOfNumber(numbers);
// console.log(averageResult);

// Remove vowels from a string
// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, "");
// }

// var inputString = "Hello, World!";
// var stringWithoutVowels = removeVowels(inputString);

// console.log(stringWithoutVowels);

// function removeVowels(str) {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!vowels.has(char)) {
//       result += char;
//     }
//   }

//   return result;
// }

// const words = "hello world";
// console.log(removeVowels(words));

// Find the second smallest number in an array.

// function secondSmallest(arr) {
//   const uniqueElement = Array.from(new Set(arr));
//   if (uniqueElement.length < 2) {
//     console.log("There is no second largest number.");
//   } else {
//     uniqueElement.sort((a, b) => a - b);
//     console.log("There is a second largest number", uniqueElement[1]);
//   }
// }

// const numbers = [12, 35, 1, 10, 34, 1];
// secondSmallest(numbers);

// Find the second largest number in an array.

// function secondLargest(arr) {
//   const uniqueElement = Array.from(new Set(arr));
//   if (uniqueElement.length < 2) {
//     console.log("There is no second largest number.")
//   } else {
//     uniqueElement.sort((a, b)=> b-a)
//     console.log("There is a second largest number", uniqueElement[1])
//   }
// }

// finf prime number optimization solution

function isPrime(num) {
  if (num <= 1 || num % 2 === 0) return false;
  if (num === 2) return true;

  if (num % 2 === 0) {
    return false;
  }
  return true;
}
console.log(isPrime(11));

// const numbers = [12, 35, 1, 10, 34, 1];
// secondLargest(numbers);

// Remove a specific element from an array.

// function removeElement(arr) {
//   arr.pop(1);
// }

// const numbers = [12, 35, 1, 10, 34, 1];

//   numbers.splice(4);

// // const result = removeElement(numbers);
// console.log(numbers);

// function evenPrime(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num*i % 2 === 0) {
//       return "even";
//     } else {
//       return "not even";
//     }
//   }
// }
// console.log(evenPrime(11));

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printEvenPrimeNumbers(start, end) {
//   for (let num = start; num <= end; num += 2) {
//     if (isPrime(num)) {
//       console.log(num);
//     }
//   }
// }
// printEvenPrimeNumbers(1, 100);

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function printEvenPrimeNumbers(start, end) {
//   for (let num = start; num <= end; num++) {
//     if (num % 2 === 0 && isPrime(num)) {
//       console.log(num);
//     }
//   }
// }
// printEvenPrimeNumbers(1, 50);
// // even output 2

// 1 to 100 even odd prime numbers finds

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num === 2) {
//     return true;
//   }
//   if (num % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i * i <= num; i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function printEvenPrimeNumbers(start, end) {
//   for (let num = start; num <= end; num++) {
//     if (num % 2 === 0 && isPrime(num)) {
//       console.log(num);
//     }
//   }
// }

// printEvenPrimeNumbers(1, 50);

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % 2 === 0) return false;
//   }
//   return true;
// }

// function printEvenPrimeNumbers(start, end) {
//   for (let num = start; num < end; num++) {
//     if (!num % 2 === 0 && isPrime(num)) {
//       console.log(num);
//     }
//   }
// }

// printEvenPrimeNumbers(1, 20);

function isPrime(num) {
  if (num <= 1 && num % 2 === 0) return false;
  if (num === 2) return true;

  for (let i = 3; i * i < num; i += 2) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
}
function printEvenPrimeNumbers(start, end) {
  for (let num = start; num < end; num++) {
    if (num % 2 === 0 && isPrime(num)) {
      console.log(num);
    }
  }
}
printEvenPrimeNumbers(1, 20);
