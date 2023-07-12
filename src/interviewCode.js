// Write a function 'code' that takes a string and returns a new string, where all input string characters are replaced according to the following rules:
// If the character appears only once in the input string, replace it with 'x';
// If the character appears several times in the input string, replace it with 'y';
// the function should be case insensitive
// Examples:
// changeWord('please') === 'xxyxxy';
// changeWord('case') === 'xxxx';
// changeWord('Times') === 'xxxxx';

// Validate input
function validateInput(input) {
  if (typeof input !== 'string' || !input.length) {
    throw new TypeError('Input must be non-empty string');
  }
}

// Encode input string
function encode(inputString) {
  // Validate input
  validateInput(inputString);

  // Map to store character frequencies
  const charFreqMap = new Map();

  // Convert to lowercase
  const lowerCaseInput = inputString.toLowerCase();

  // Build character frequency map
  for (let char of lowerCaseInput) {
    const count = charFreqMap.get(char) || 0;
    charFreqMap.set(char, count + 1);
  }

  // Encode string based on frequency
  let encodedString = '';
  for (let char of lowerCaseInput) {
    encodedString += charFreqMap.get(char) === 1 ? 'x' : 'y';
  }

  return encodedString;
}

// Usage examples
console.log(encode('please')); // xxyxxy
console.log(encode('case')); // xxxx
console.log(encode('Times')); // xxxxx
console.log(encode('Case')); // xxxx
