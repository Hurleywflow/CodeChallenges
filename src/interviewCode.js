/* eslint-disable no-useless-escape */
// Write a function 'code' that takes a string and returns a new string, where all input string characters are replaced according to the following rules:
// If the character appears only once in the input string, replace it with 'x';
// If the character appears several times in the input string, replace it with 'y';
// the function should be case insensitive
// Examples:
// changeWord('please') === 'xxyxxy';
// changeWord('case') === 'xxxx';
// changeWord('Times') === 'xxxxx';

const singleChar = 'x'; // Replace character if it appears once
const multiChar = 'y'; // Replace character if it appears multiple times
const charFreq = new Map(); // Store character frequencies

function validateInput(input) {
  // Checks that input is a non-empty string
  if (typeof input !== 'string' || !input.length) {
    throw new TypeError('Input must be non-empty string');
  }
}
function encode(input) {
  // Replaces characters in input string according to frequency
  validateInput(input);
  charFreq.clear();

  for (let char of input) {
    const lowerChar = char.toLowerCase();
    // Increment frequency of character in Map
    charFreq.set(lowerChar, (charFreq.get(lowerChar) || 0) + 1);
  }
  let result = '';
  for (let char of input) {
    const lowerChar = char.toLowerCase();
    // Replace character with 'x' if appears once, else 'y'
    result += charFreq.get(lowerChar) === 1 ? singleChar : multiChar;
  }
  return result;
}

console.log(encode('please'));
console.log(encode('case'));
console.log(encode('Times'));
console.log(encode('Case'));

