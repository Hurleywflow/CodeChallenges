// Write a function 'code' that takes a string and returns a new string, where all input string characters are replaced according to the following rules:
// If the character appears only once in the input string, replace it with 'x';
// If the character appears several times in the input string, replace it with 'y';
// the function should be case insensitive
// Examples:
// changeWord('please') === 'xxyxxy';
// changeWord('case') === 'xxxx';
// changeWord('Times') === 'xxxxx';

const SINGLE_OCCURRENCE = 'x';
const MULTIPLE_OCCURRENCES = 'y';

function code(str) {
  if (typeof str !== 'string' || str.length === 0) {
    throw new TypeError('Input parameter must be a non-empty string.');
  }
  str = str.toLowerCase();
  let result = '';
  const freq = new Map();
  for (const char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  for (const char of str) {
    if (freq.get(char) === 1) {
      result += SINGLE_OCCURRENCE;
    } else {
      result += MULTIPLE_OCCURRENCES;
    }
  }
  return result;
}
console.log(code('please'));
console.log(code('case'));
console.log(code('Times'));
console.log(code('Case'));
