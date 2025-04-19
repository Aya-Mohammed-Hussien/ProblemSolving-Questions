// 1-2-2025
// Problem1: Find the Longest Word in a String
// Write a JavaScript function that takes a string as input and returns the longest word in that string.
// If there are multiple words with the same maximum length, return the first one encountered.
const findLongestWord = (str) => {
  const words = str.split(" "); // don't forget to make a space between the two strings
  let longestWord = "";
  for (let word of words) {
    let cleanWord = word.replace(/[^0-9a-zA-Z]g/, "");
    if (cleanWord.length > longestWord.length) {
      longestWord = cleanWord;
    }
  }
  return longestWord;
};
console.log(findLongestWord("Hello i am aya"));
console.log(findLongestWord("hey ho is javascript?"));
console.log(findLongestWord("where are you ?"));
console.log(findLongestWord("Hello world"));

// 2-2-2025
// Problem2: Count Vowels in a String
// Write a JavaScript function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
//  The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.
let vowels = ["a", "e", "i", "o", "u"];
const countVowelCharacters = (str) => {
  let characters = str.toLowerCase().split("");
  const vowelCharacters = characters.filter((character) =>
    vowels.includes(character)
  );
  return vowelCharacters.length;
};
console.log(countVowelCharacters("Hello"));
console.log(countVowelCharacters(`Hello i'm aya`));
console.log(countVowelCharacters("JavaScript is saying hiiii"));
console.log(countVowelCharacters("How are you ?"));

// 3-2-2025
// Problem: Reverse a String
// Write a function reverseString(str) that takes a string as an argument and returns the string in reverse order.
const reverseStr = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z]/g, "");
  return cleanStr.split("").reverse().join(""); //using slit method
};
console.log(reverseStr("Hello125&^%$"));
// Another solution without using split method ;
const reverseString = (str) => {
  const newStr = str.replace(/[^a-zA-Z]/g, "");
  let reversedStr = "";
  for (i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return reverseStr;
};
console.log(reverseStr("Hello125&^%$")); //Hello

//4-2-2025
// Problem: Array Duplicate Remover
// Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicate values removed.
//  The order of the elements should be preserved.
const removeDuplicates = (arr) => {
  const newArr = []; //[1,2,2,6,4,4] => output [1,2,6,4]
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(removeDuplicates([1, 2, 2, 6, 4, 4]));

// 6-2-2025
// Problem: Find the Missing Number
// You are given an array of integers where the numbers are in the range from 1 to n (inclusive), and one number is missing.
// Write a JavaScript function to find the missing number. // ex [1,2,3,4,6] output : 5
const findMissingNumber = (arr) => {
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // w can use for loop 3adyy gedan
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 3, 5, 6])); //4
console.log(findMissingNumber([1, 2, 3, 4, 6])); //5
console.log(findMissingNumber([1, 3, 4, 5, 6])); //2

// 16-2-2025
//Problem: Array Chunking
//Write a JavaScript function that splits an array into subarrays (chunks) of a specified size.
// The function should take two arguments:
// 1- The array to be chunked.
// 2-The size of each chunk.
// Requirements:
//1- If the array is empty, return an empty array.
//2- If the chunk size is less than 1, return an empty array. //[1,2,3,4,5,6,7,8] , 3
const chunkArray = (arr, size) => {
  if (arr.length === 0 || size < 1) {
    return [];
  }
  let newArr = [];
  let start = 0;
  while (start < arr.length) {
    const chunk = arr.slice(start, start + size);
    newArr.push(chunk);
    start += size;
  }
  return newArr;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray([1, 2, 3, 4], 4));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));

//16-2-2025
//Problem: Remove Duplicates from an Array
//Write a JavaScript function that removes duplicate elements from an array in place ( without creating a new array).
const removeDuplicateInTheSameArray = (arr) => {
  //[1,2,3,4,2,3,5,4,6]
  return [...new Set(arr)];
};
console.log(removeDuplicateInTheSameArray([1, 2, 3, 4, 2, 3, 5, 4, 6]));

//10-3-2025
// Problem : You are developing a text editor's undo feature that needs to handle word operations. The editor maintains a history of words, and users can perform two types of operations: 'ADD' (adds a word) and 'UNDO' (reverts the last non-UNDO operation). Each UNDO operation removes the effect of the last ADD operation that hasn't been undone yet. Design a function that processes a sequence of operations and returns the final state of the text. Words should be space-separated in the final output. If there are no operations left to undo, the UNDO operation should be ignored.
// Input:['ADD hello', 'ADD world', 'UNDO', 'ADD there']
// Output:hello there
// Explanation:First two ADDs create 'hello world', UNDO removes 'world', then 'there' is added
function processOperations(operations) {
  let stack = [];
  for (let operation of operations) {
    if (operation.startsWith("ADD")) {
      // Extract the word from the ADD operation and push it to the stack
      let word = operation.split(" ")[1];
      stack.push(word);
    } else if (operation === "UNDO" && stack.length > 0) {
      // If there are words to undo, pop the last word from the stack
      stack.pop();
    }
  }
  // Join the words in the stack into a space-separated string and return it
  return stack.join(" ");
}
const operations = ["ADD hello", "ADD world", "UNDO", "ADD there"];
const output = processOperations(operations);
console.log(output);

//2-4-2025
//Problem is to create a pyramid and inverted pyramid
function drawPyramid() {
  const character = "#";
  const count = 8;
  const rows = [];
  let inverted = true;
  function padRow(rowNumber, rowCount) {
    return (
      " ".repeat(rowCount - rowNumber) +
      character.repeat(2 * rowNumber - 1) +
      " ".repeat(rowCount - rowNumber)
    );
  }
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }
  let result = "";
  for (const row of rows) {
    result = result + row + "\n";
  }
  console.log(result);
}
drawPyramid();

//7-4-2025
//Problem: The Mismatched Pair
//Given an array where all elements are identical except one, write a function findMismatch that returns the index of the unique element.

const findMismatch = (arr) => {
  const commonElement = arr[0] === arr[1] ? arr[0] : arr[2];
  let uniqueElement = arr.findIndex((element) => element !== commonElement);
  return uniqueElement;
};

console.log(findMismatch([2, 2, 2, 2, 1]));
console.log(findMismatch([2, 2, 1, 2]));
console.log(findMismatch([1, 2, 2, 2]));
console.log(findMismatch([2, 2, 1, 2, 2]));

//8-4-2025
//Problem: Sum of All Numbers in a Range
// Write a JavaScript function that calculates the sum of all numbers between two integers (inclusive).
// The function should handle both positive and negative numbers, as well as cases where the first number is greater than the second.

const sumInRange = (startNumber, endNumber) => {
  let sum = 0;
  if (startNumber > endNumber) {
    [startNumber, endNumber] = [endNumber, startNumber];
  }
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumInRange(5, 1));
console.log(sumInRange(1, 5));
console.log(sumInRange(-3, 3));

//19-4-2025
//Problem :  The Mismatched Bracket Detector
//Write a function in plain JavaScript that determines whether a given string of brackets is balanced (properly nested and closed).

//We need to determine if a string containing only brackets ((), {}, []) is balanced, meaning:
//Every opening bracket has a matching closing bracket.
//Brackets are properly nested (e.g., ([)] is invalid).

// Edge cases:
// Empty string → true (no brackets to balance).
// Non-bracket characters? Assume input is only brackets (no need to handle them).

const isBalanced = (brackets) => {
  const stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };
  for (const character of brackets) {
    if (pairs[character]) {
      stack.push(character);
    } else {
      const last = stack.pop();
      if(pairs[last] !== character ){
        return false ;
      }
    }
  }
  return stack.length === 0 ;
};
console.log(isBalanced("[()]"));
console.log(isBalanced("[(]"));
console.log(isBalanced("[(])"));
