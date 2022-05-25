//! function solution Match sequences in a array
// Arithmetic operations, Geometric operation
// no negative numbers
const mathSequence = (arr) => {
  // set() is return a unique number in array
  let arith = new Set();
  let geo = new Set();
  for (let i = 0; i < arr.length - 1; i++) {
    let arith_temp = arr[i + 1] - arr[i];
    let geo_temp = arr[i + 1] / arr[i];
    // set() function use add instead of push like array
    arith.add(arith_temp);
    geo.add(geo_temp);
  }
  if (arith.size === 1) {
    return 'Arithmetic';
  }
  if (geo.size === 1) {
    return 'Geometric';
  }
  // neither of them
  return -1;
};
console.log(mathSequence([2, 4, 6, 8, 10]));
console.log(mathSequence([3, 9, 27]));
console.log(mathSequence([3, 9, 63]));

//! function solution longest words in a string return first longest word in sentence
const wordLongest = (str) => {
  const words = str.split(' ');
  return words.reduce((acc, cur) => {
    return cur.length >= acc.length ? cur : acc;
  }, '');
};
console.log(
  wordLongest('The quick brown fox jumped over the lazyyyy lazyyyy  change dog')
);

//! return all longest words in a string
const longestWords = (str) => {
  let words = str.split(' ');
  let longest = [''];
  let size = 0;
  words.forEach((word) => {
    if (word.length >= size) {
      size = word.length;
      // last item in array
      if (longest[longest.length - 1].length < word.length) {
        // empty array
        longest = [];
        longest.push(word);
      } else {
        longest = [...longest, word];
      }
    }
  });

  return [...new Set(longest)];
};
console.log(
  longestWords('The quick brown fox jumped over the lazy change dog')
);

//! Capitalize first letter of each word
const capitalize = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
console.log(capitalize('the quick brown fox'));

//! Unique values in string or string compression
const uniqueValues = (str) => {
  let unique = '';
  for (const element of str) {
    if (unique.indexOf(element) === -1) {
      unique += element;
    }
  }
  return unique;
};
console.log(uniqueValues('abbccccdddddddee'));

//! or true or false statements
const uniqueValue = (str) => {
  for (const element of str) {
    if (str.indexOf(element) !== str.lastIndexOf(element)) {
      return false;
    }
  }
  return true;
};
console.log(uniqueValue('abbccccdddddddee'));
console.log(uniqueValue('abc'));

// or use Set methods
const uniqueValue1 = (str) => {
  return new Set(str).size === str.length;
};
console.log(uniqueValue1('abbccccdddddddee'));
console.log(uniqueValue1('abc'));

//! Sum array for each element except the biggest number of elements
const arraySum = (arr) => {
  let max = 0;
  let sum = 0;
  for (const element of arr) {
    if (element > max) {
      max = element;
    }
    sum += element;
  }
  return sum - max;
};
console.log(arraySum([1, 2, 3, 54, 7]));

//! Sum array for each element except the biggest number of elements and compare with the biggest number
// returns statements true or false
const arraySum2 = (arr) => {
  let tempArray = arr.sort((a, b) => {
    // for ascending order
    return a - b;
  });
  // take away the biggest number of elements
  let largest = tempArray.pop();
  // let largest = Math.max(tempArray)
  let sum = 0;
  tempArray.forEach((num) => {
    sum += num;
  });
  return sum === largest;
};
console.log(arraySum2([1, 2, 3, 54, 7]));

//! nique objects property values from array of objects
let product = [
  {title: 'iphone', price: 100, company: 'Google'},
  {title: 'iphone', price: 100, company: 'apple'},
  {title: 'iphone', price: 100, company: 'apple'},
  {title: 'iphone', price: 100, company: 'Google'},
  {title: 'iphone', price: 100, company: 'samsung'}
];
const getUnique = (arr) => {
  let tempArray = arr.map(item => item.company);
  return [...new Set(tempArray)];
  // or
  // return [
  //   ...arr.reduce((acc, cur) => {
  //     acc.add(cur.company);
  //     return acc;
  //     // type of set return
  //   }, new Set())
  // ];
};
console.log(getUnique(product));

//! Count the first highest of repeated characters a in word
const highestRepeatLetterInWord = (str) => {
  let temp = {};
  let max = 0;
  let letter = '';
  for (const element of str) {
    if (temp[element]) {
      temp[element]++;
    } else {
      temp[element] = 1;
    }
    if (temp[element] > max) {
      max = temp[element];
      letter = element;
    }
  }
  return {letter, max};
};
console.log(
  highestRepeatLetterInWord(
    'The quick brown fox jumpedd overrrrrrrrrr the l dog'
  )
);

//! Unique seconds values in array
const secondValue = (arr) => {
  let values = [...new Set(arr)].sort((a, b) => {
    return a - b;
  });
  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  } else {
    return `${values[1]} and ${values[values.length - 2]}`;
  }
};
console.log(secondValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//! Return first unique number in an array
const firstUniqueNumber = (arr) => {
  let temp = new Set();
  arr.filter((item) => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
      temp.add(item);
    }
  });
  // return the first element of the set
  return [...temp][0];
};
console.log(firstUniqueNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10]));

//! Checking Prime or Composite numbers
const isPrime = (num) => {
  if (num < 2) {
    return 'neither prime nor composite';
  }
  let root = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return 'Composite numbers';
    }
  }
  return 'prime number';
};
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(15));

//! Count all repeated characters without numbers and symbols in a string
const countRepeatedLetters = (str) => {
  let tempArr = str.split('');
  let tempObj = {};
  let count = 0;
  for (let item of tempArr) {
    if (tempObj[item]) {
      tempObj[item]++;
    } else {
      tempObj[item] = 1;
    }
  }
  for (let key in tempObj) {
    if (tempObj[key] > 1) {
      count++;
    }
  }
  return count;
};
console.log(countRepeatedLetters('aabbcxxyyzz'));

//! Count repeated each characters in a string
const countRepeatedLetters2 = (str) => {
  let tempArr = str.split('');
  let letters = [];
  let count = 1;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]}`;
      // letters.push(value);
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.sort((a, b) => {
    // for ascending order
    return a - b;
  });
};
console.log(countRepeatedLetters2('aabbcxxyyzzzzz'));

//! Regex Palindrome in a string
const isPalindromes = (str) => {
  let tempArr = str
    // ignore symbols: ;
    .match(/[A-Z0-9]+/gi)
    .join('')
    .toLowerCase();
  let tempArr2 = tempArr.split('').reverse().join('');
  return tempArr === tempArr2;
};
console.log(isPalindromes('Was it a car or a cat I saw'));
console.log(isPalindromes('Was it a car I saw'));

// return 3 times straight away pairs of numbers from arguments
const threeTimesStraightAway = (a, b) => (c, d) => (e, f) =>
  // we can do what we need
  a * b * c + d * e * f;
console.log(threeTimesStraightAway(2, 3)(4, 5)(6, 7));

//! Multiply numbers without numbers Zero - No Array
const multiplyNumbers = (...args) => {
  return args.reduce((acc, cur) => {
    return cur ? acc * cur : acc + cur;
    // initial values from 1 to higher for multiply otherwise plus
  }, 1);
};
console.log(multiplyNumbers(1, 2, 3, 4, 0));

//! Count sequences of 3 numbers in an array
// countSequences([8, 6, 8, 6, 7, 4, 7]) == [[8,6,8], [6,8,6], [7,4,7]] => 3
const countSequences = (arr) =>
  arr.reduce(
    (acc, cur, index) =>
      acc + (cur === arr[index + 2] && cur !== arr[index + 1]),
    0
  );
console.log(countSequences([8, 6, 8, 6, 7, 4, 7]));

//! Sum up separate digits of an arguments and then return oll or even
const sumUpSeparateDigits = (num) => {
  let tempArr = num.toString().split('');
  let sum = tempArr.reduce((acc, cur) => {
    // parsInt - for integer
    // parsFloat - for float
    // Number - for NaN if not a number
    return acc + Number(cur);
  }, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
};
console.log(sumUpSeparateDigits(123));
console.log(sumUpSeparateDigits(23));

//! FizzBuzz in javascript
console.time('FizzBuzz Solution');
for (let i = 1; i < 50; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
console.timeEnd('FizzBuzz Solution');

console.time('short solution');
for (let j = 1; j < 50; j++) {
  // 0 is falsy value
  console.log((j % 3 ? '' : 'Fizz') + (j % 5 ? '' : 'Buzz') || j);
}
console.timeEnd('short solution');

//! Swap first character and last character in string
const swapFirstLast = (str) => {
  let tempArr = str.split('');
  let first = tempArr.shift();
  let last = tempArr.pop();
  tempArr.unshift(last);
  tempArr.push(first);
  return tempArr.join('');
};
console.log(swapFirstLast('first and seconds'));
console.log(swapFirstLast('st and second'));

//! Find missing numbers or Number in an array
// find max numbers and min numbers in an array and loop over them
const missingNumber = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let missing = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
};
console.log(missingNumber([1, 2, 9, 10]));
console.log(missingNumber([1, 10]));

//! Find the seconds largest element in an array
const secondLargest = (arr) => {
  let max = Math.max(...arr);
  return Math.max(...arr.filter((item) => item < max));
};
console.log(secondLargest([1, 2, 9, 10]));
console.log(secondLargest([1, 2, 9, 10, 12, 15]));
console.log(secondLargest([1, -2, 9, -10, -12, -15]));

//! Find the seconds smallest element in an array
const secondSmallest = (arr) => {
  let min = Math.min(...arr);
  return Math.min(...arr.filter((item) => item > min));
};
console.log(secondSmallest([1, 2, 9, 10]));
console.log(secondSmallest([1, -2, 9, -10, -12, -15]));

//! Array transformation
//given an array of numbers, move all 0 element to the end of the array while maintaining the relative order of the non-zero elements.
const moveZeros = (arr) => {
  let zero = arr.filter((item) => item === 0);
  let nonZero = arr.filter((item) => item !== 0);
  return [...nonZero, ...zero];
};
console.log(moveZeros([1, 2, 0, 3, 0, 4, 0, 5]));

//! Array rotation for k steeps
// Given an array of integers, rotate the array by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
const rotateArray = (arr, k) => {
  let temp = [];
  for (let i = 0; i <= k; i++) {
    temp.push(arr.shift());
  }
  return [...arr, ...temp];
};
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//! remove duplicates from an array
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]));

//! We have two players. player1 and player2.
// They play Rocks, Paper, Scissors.
// The rules are:
// - Rock beats Scissors
// - Scissors beats Paper
// - Paper beats Rock
//
// Write a function that takes in two players and returns the winner.

const rockPaperScissors = (player1, player2) => {
  const rules = {
    rock: {
      rock: 'draw',
      paper: 'player2',
      scissors: 'player1'
    },
    paper: {
      paper: 'draw',
      rock: 'player1',
      scissors: 'player2'
    },
    scissors: {
      scissors: 'draw',
      rock: 'player2',
      paper: 'player1'
    }
  };

  return rules[player1][player2];
};
console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('paper', 'rock'));
console.log(rockPaperScissors('scissors', 'paper'));
console.log(rockPaperScissors('scissors', 'rock'));

//! Get an array of numbers, return the sum of all of the positive one in the array
const positiveSum = (arr) => {
  let sum = 0;
  for (const element of arr) {
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
};
console.log(positiveSum([1, 2, 3, 4, -5]));

//! Repeat a string with n times (recursion)
const repeatString = (str, n) => {
  // this is base case of recursive function
  if (n === 1) {
    return str;
  }
  return str + repeatString(str, n - 1);
};
console.log(repeatString('hello', 3));
console.log('hello'.repeat(3));

//! Remove all spaces from a string and then return an array of words
const removeSpaces = (str) => {
  return str.split(' ').filter((word) => word !== '');
};
console.log(removeSpaces('hello world'));

//! Given an array of integers, return a new array with each value doubled
const mapArray = (arr) => {
  return arr.map((num) => num * 2);
};
console.log(mapArray([1, 2, 3]));

//! Sum of two array, return the totals sum of the two array
const sumArray = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((acc, val) => acc + val);
};
console.log(sumArray([1, 2, 3], [4, 5, 6]));

//! Human years, Cat years and Dog years
// Human years = 1 , Cat years = 15 , Dog years = 15
// Human years = 2 , Cat years = 24 , Dog years = 24
// each year after Human years = 2 , Cat years = (excessYears - Human years) * 4, Dog years = (excessYears - Human years) * 5
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears;
  let dogYears;
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
    return [humanYears, catYears, dogYears];
  }
  if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
    return [humanYears, catYears, dogYears];
  }
  const extraYears = humanYears - 2;
  const extraCatYears = extraYears * 4;
  const extraDogYears = extraYears * 5;
  catYears = extraCatYears + 24;
  dogYears = extraDogYears + 24;
  return [humanYears, catYears, dogYears];
};
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(10));

//! The match record in an array matches ['x:y', 'x:y'] the following pattern:
/*
if x > y total matches point = 3
if x < y total matches point = 0
if x = y total matches point = 1
return the total matches point
*/
const matchRecord = (arr) => {
  let totalMatches = 0;
  arr.forEach((arrItem) => {
    const [x, y] = arrItem.split(':');
    if (x > y) {
      totalMatches += 3;
    } else if (x < y) {
      totalMatches += 0;
    } else {
      totalMatches += 1;
    }
  });

  return totalMatches;
};
console.log(matchRecord(['3:1', '1:2', '3:2']));
console.log(matchRecord(['1:1', '1:2', '3:2']));

//! validate Palindrome true or false
const isPalindrome = (str) => {
  let tempArr = str.split('');
  let reversed = tempArr.reverse().join('');
  return reversed === str;
};
console.log(isPalindrome('madam'));

//! Validate arguments for integer values and return reverse value
const reverseInt = (num) => {
  let reversed = num.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(num);
};
console.log(reverseInt(123));
console.log(reverseInt(-123));

//! Capitalize all characters in the sentence
/**
 * Capitalize the first letter of each word in a string
 * @param str - The string to capitalize.
 * @returns The string 'Hello World'
 */
const capitalizes = (str) => {
  let tempArr = str.split(' ');
  let capitalized = tempArr.map(
    (word) => word[0].toUpperCase() + word.substr(1)
  );
  return capitalized.join(' ');
};
console.log(capitalizes('Hello world'));
console.log(capitalizes('a letter'));

//! Max characters in the sentence
// return the characters that is the most common character in the sentence
const maxChar = (str) => {
  let tempArr = str.split('');
  let max = 0;
  let charMap = {};
  let maxChar1 = '';
  tempArr.forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar1 = char;
    }
  });
  return `${max}:${maxChar1}`;
};
console.log(maxChar('hello world, i love aaaaa rrrrrr JavaScript'));

//! LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']
const longestWord = (str) => {
  // Create filtered array
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

console.log(longestWord('Hello, my name is Hurley, Henrry'));

//or
const longestWord2 = (str) => {
  let tempArr = str.toLowerCase().match(/[a-z0-9]+/g);
  let longestWordArr = 0;
  for (let element of tempArr) {
    if (element.length > longestWordArr) {
      longestWordArr = element.length;
    }
  }
  return tempArr.filter((word) => word.length === longestWordArr);
};
console.log(longestWord2('Hello, my name is Hurley, Henrry'));

//! Split an array into chunks array with size of n
// ex. chunkArray([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
const chunkArray = (arr, size) => {
  let tempArr = [];
  for (let i = 0; i < arr.length; i += size) {
    tempArr.push(arr.slice(i, i + size));
  }
  return tempArr;
};

console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 3));

//! Flatten an array
// ex. flattenArray([1, [2, 3, [4, 5]]]) === [1, 2, 3, 4, 5]
const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    } else {
      return acc.concat(val);
    }
  }, []);
};

console.log(flattenArray([1, [2, 3, [4, 5]]]));
// or
const flattenArray2 = (arr) => {
  return arr.flat(Infinity);
};
console.log(flattenArray2([1, [2, 3, [4, 5]]]));

//! Anagrams
// ex. anagrams('rail safety', 'fairy tales') === true
// ex. anagrams('RAIL! SAFETY!', 'fairy tales') === true
// ex. anagrams('Hi there', 'Bye there') === false
const anagrams = (str1, str2) => {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  return arr1.every((value, index) => value === arr2[index]);
};

console.log(anagrams('rail safety', 'fairy tales'));
// const isAnagramx = (str1, str2) =>
//   str1
//     .split('')
//     .sort()
//     .every((value, index) => value === str2.split('').sort()[index]);
// console.log(isAnagramx('rail safety', 'fairy tales'));

//! LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
const letterChanges = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/[aeiou]/gi, (vowel) => vowel.toUpperCase());

  return newStr;
};

// Call Function
console.log(letterChanges('Hello There Z'));

//! Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20
const addAll = (...nums) => {
  return nums.reduce((acc, val) => acc + val);
};
console.log(addAll(2, 5, 6, 7));

//! SUM ALL PRIMES form whole numbers
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
const sumAllPrimes = (num) => {
  let total = 0;
  const checkForPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i < 2) return false;
      if (i === 2) return true;
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
};
console.log(sumAllPrimes(10));

// or
const sumAllPrimes1 = (num) => {
  let sum = 0;
  const isPrimes = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  for (let i = 2; i <= num; i++) {
    if (isPrimes(i)) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumAllPrimes1(10));

//! SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
const seekAndDestroy = (arr, ...args) => {
  return arr.filter((value) => !args.includes(value));
};
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

//! SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

const sortByHeight = (arr) => {
  const sorted = arr.filter((value) => value !== -1).sort((a, b) => a - b);
  return arr.map((value) => (value === -1 ? value : sorted.shift()));
};
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

//! MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
const missingLetters = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arr = str.split('');
  const missing = alphabet.split('').filter((value) => !arr.includes(value));

  return missing.length === 0 ? undefined : missing[0];
};
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));

//! EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 45, 60, 60, 71]) == [170, 116]
const evenOddSums = (arr) => {
  const even = arr
    .filter((value) => value % 2 === 0)
    .reduce((acc, val) => acc + val);
  const odd = arr
    .filter((value) => value % 2 !== 0)
    .reduce((acc, val) => acc + val);
  return [even, odd];
};
console.log(evenOddSums([50, 45, 60, 60, 71]));

//! Bishop and Pawn
// Write a function that takes in a string of 4 characters and determines if the bishop can move to that square
// ex. bishopAndPawn("a1", "c3") == true
// ex. bishopAndPawn("h1", "h3") == false
const bishopAndPawn = (bishop, pawn) => {
  const bishopRow = bishop[1];
  const bishopCol = bishop[0];
  const pawnRow = pawn[1];
  const pawnCol = pawn[0];

  return (
    Math.abs(bishopRow.charCodeAt() - pawnRow.charCodeAt()) ===
    Math.abs(bishopCol.charCodeAt() - pawnCol.charCodeAt())
  );
};
console.log(bishopAndPawn('a1', 'c3'));

//! Zero matrix algorithm
// Write an algorithm that takes in a 2D array and if any zero value lies on the array, with n is length of the subarray
// sets that entire row and column to zero
// ex.
// zeroMatrix([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]) == [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]
const zeroMatrix = (arr, n) => {
  const rows = [];
  const cols = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.includes(i) || cols.includes(j)) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
};
console.log(
  zeroMatrix(
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    3
  )
);

//! URLify algorithm
/*
Write an algorithm that replaces all spaces in a string with '%20'
ex.
urlify("Mr John Smith    ", 13) == "Mr%20John%20Smith"

*/
const urlify = (str, n) => {
  return str.trim().replace(/\s/g, '%20');
};
console.log(urlify('Mr John Smith    ', 13));

//! Write a function which multiplies corresponding digits in two lists from a string and separated by pipe (|) character
// Lists in range[1, 10].
// Digit in range[0, 99].
// Ex.
// multiplyTwoList('9 0 6 | 15 14 9') == 135 0 54

/**
 * Given a string of two lists of numbers separated by a pipe (|),
 * return the product of the two lists
 * @param str - a string that contains two lists separated by a pipe (|) character.
 * @returns The result of multiplying the numbers in the first list by the numbers in the second list.
 */
const multiplyTwoList = (str) => {
  let result = '';
  const arr = str.trim();
  const list1 = arr.split('|')[0].trim().split(' ');
  const list2 = arr.split('|')[1].trim().split(' ');
  for (let i = 0; i < list1.length; i++) {
    result += list1[i] * list2[i] + ' ';
  }
  return result.trim();
};
console.log(multiplyTwoList('9 0 6 | 15 14 9'));


//! Capitalize all characters in the sentence
/**
 * Capitalize the first letter of each word in a string
 * @param str - The string to capitalize.
 * @returns The string 'Hello World'
 */
function capitalize1(str) {
  let tempArr = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1));
  return tempArr.join(' ');
}
console.log(capitalize1('Hello world'));
console.log(capitalize1('a letter'));

// Write a function solution that, input integer N, returns a string consisting of N lowercase characters (a-z) such that each character occurs an odd number of times
// Ex.
// lowerCaseCharacter(4) == "uutu"
// lowerCaseCharacter(7) == "gwgtgww"
// lowerCaseCharacter(1) == "I"
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000].

function lowerCaseCharacter(N) {
  let result = '';
  let hash = {};
  for (let i = 0; i < N; i++) {
    let random = Math.floor(Math.random() * 26) + 97;
    if (hash[String.fromCharCode(random)] === undefined) {
      hash[String.fromCharCode(random)] = 1;
      result += String.fromCharCode(random);
    } else {
      i--;
    }
  }
  return result;
}

// input N = 4, the output "uutu"
console.log(lowerCaseCharacter(4));
// input N = 7, the output "gwgtgww"
console.log(lowerCaseCharacter(7));
// input N = 1, the output "I"
console.log(lowerCaseCharacter(1));

//! balanced brackets
/*  Write a function that takes a string of brackets and determines whether the order of the brackets is valid.
  The brackets must close in the correct order, "()" and "{}" are valid but "[{()}]" is not.
  Ex.
  balancedBrackets("()") == true
  balancedBrackets("[{()}]") == true
  balancedBrackets("[{()}]") == false
*/
function balancedBrackets(str) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];
  for (let bracket of str) {
    if (brackets[bracket]) {
      stack.push(bracket);
    } else {
      if (brackets[stack.pop()] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(balancedBrackets('()'));
console.log(balancedBrackets('[{()}]'));
console.log(balancedBrackets('[{()]'));

//! or
// const balancedbrackets1 = (str) => {
//   const stack = [];
//   let openers = ['{', '[', '('];
//   let closers = ['}', ']', ')'];

//   const dict = {
//     '{': '}',
//     '[': ']',
//     '(': ')'
//   };

//   for (const element of str) {
//     let char = element;
//     if (openers.includes(char)) {
//       stack.push(char);
//     } else if (closers.includes(char)) {
//       //is our stack empty?

//       if (!stack.length) {
//         return false;
//       }
//       //does our popped element not match the corresponding element?
//       else if (dict[stack.pop()] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };
// console.log(balancedbrackets1('()'));
// console.log(balancedbrackets1('[{()}]'));
// console.log(balancedbrackets1('[{()]'));

/* An Armstrong number is an n-digit number that is equal to the sum of the nth
nth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false.
*/

function isArmstrongNumber(n) {
  let strN = String(n);
  let power = strN.length;
  let sum = 0;
  for (let num of strN) {
    sum += Math.pow(Number(num), power);
  }
  return sum === n;
}
console.log(isArmstrongNumber(153));
