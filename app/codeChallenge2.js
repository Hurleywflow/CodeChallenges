const foods = [
  {
    name: '🍔',
    price: 30.89,
    group: 1
  },
  {
    name: '🍨',
    price: 20.71,
    group: 1
  },
  {
    name: '🍿',
    price: 10.31,
    group: 2
  },
  {
    name: '🍵',
    price: 5.98,
    group: 2
  }
];
//! group array object by values
function foodByGroup(group) {
  let check = {};
  group.forEach((item) => {
    if (!check[item.group]) {
      check[item.group] = [item];
    } else {
      check[item.group].push(item);
    }
  });
  return check;
}
console.log(foodByGroup(foods));

//! collection price from an array of objects
const collectionPrice = (arr) => {
  return arr.reduce((acc, cur) => {
    return [...acc, cur.price];
  }, []);
};
console.log(collectionPrice(foods));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, undefined];
const arr = array.filter(Boolean);
console.log(arr);
//! random string
const randomString = (num) => Math.random().toString(num).slice(2);
console.log(randomString(10));
// or
const RandomId = (len) =>
  Math.random()
    .toString(36)
    .substring(2, len + 2);
console.log(RandomId(10));

//! uppercase string
const uppercaseWords = (str) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
console.log(uppercaseWords('hello world and everyone'));

//! camelCase string
const toCamelCase = (str) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
console.log(toCamelCase('hello-world-and-everyone'));

//! Truncate a number
const truncate = (num, places) => {
  const factor = Math.pow(10, places);
  return Math.trunc(num * factor) / factor;
};
console.log(truncate(1.234567, 3));

//! day of the years
const dayOfTheYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};
console.log(dayOfTheYear(new Date('2020-01-01')));
//! Convert RGB color to hex
const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log(rgbToHex(255, 255, 255));

// clear all cookies
// const clearCookies = () =>
//   document.cookie
//     .split(';')
//     .forEach(
//       (c) =>
//         (document.cookie = c
//           .replace(/^ +/, '')
//           .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
//     );
// console.log(clearCookies());

// check dark mode
// const isDarkMode = () => {
//   const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
//   return darkMode.matches;
// };
// console.log(isDarkMode());

//! format money
const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
  return -1;
};
console.log(formatMoney(123456789.1234569));

//!` generate start rates
const StartScore = (rate) => '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
const start = StartScore(3);
console.log(start);

//! fill zero at start
const FillZero = (num, len) => num.toString().padStart(len, '0');
console.log(FillZero(1234, 5));

// const fillZero = (num) => (num < 10 ? `0${num}` : num);
// console.log(fillZero(11));

//! check data type
const DataType = (tgt, type) => {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase();
  return type ? dataType === type : dataType;
};

DataType('test'); // "string"
DataType([], 'array'); // true

//! count array elements
const arr1 = [0, 1, 1, 2, 2, 2];
const count = arr1.reduce((acc, el) => {
  acc[el] = acc[el] ? ++acc[el] : 1;
  return acc;
}, {});
let sorted = Object.entries(count).sort((a, b) => a[1] - b[1]);
console.log(sorted.at(-1).join(':'));

//! get random array element
const randomArrayElement = (anArray1) =>
  anArray1[Math.floor(Math.random() * anArray1.length)];
console.log(randomArrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//! creat array with specified length
const createArray = (len) => [...Array(len).keys()];
console.log(createArray(5));
// or
const createArray1 = (len) => new Array(len).fill(0);
console.log(createArray1(5));

//! get getQueryParams, changes single quotes to double quotes at {, }, : and ,
const getQueryParams = (URL) =>
  JSON.parse(
    '{"' +
      decodeURI(URL.split('?')[1]).replace(/&/g, '","').replace(/=/g, '":"') +
      '"}'
  );
console.log(getQueryParams('https://codingcafe.co.in?name=gyan&age=24'));

//! find missing elements in array
// ex.
// missingElements([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]) == [4, 6]
const missingElements = (arr11, arr2) => {
  const missing = [];
  for (const element of arr2) {
    if (arr11.indexOf(element) === -1) {
      missing.push(element);
    }
  }
  return missing;
};
console.log(missingElements([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]));

//! find missing elements in an array with o(n) time complexity
// ex.
// missingArrayElements([1,3,4,6,7,8,10]) == [2,5,9]
const missingArrayElements = (arr3) => {
  const missing = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i + 1] - arr3[i] !== 1 && arr3[i + 1] !== undefined) {
      missing.push(arr3[i] + 1);
    }
  }
  return missing;
};
console.log(missingArrayElements([1, 3, 4, 6, 7, 8, 10]));

//! extract domain from a string URL
const extractDomain = (url) => {
  const domain = url.split('//')[1];
  return domain.split('.')[0];
};
console.log(extractDomain('https://codingcafe.co.in'));

//! convert int32 to IPv4 address
const int32ToIPv4 = (int32) => {
  const octets = [];
  for (let i = 0; i < 4; i++) {
    octets.unshift(int32 & 255);
    int32 = int32 >> 8;
  }
  return octets.join('.');
};
console.log(int32ToIPv4(2130706433));
console.log(int32ToIPv4(2154959208));

// convert int64 to IPv6 address
const int64ToIPv6 = (int64) => {
  const octets = [];
  for (let i = 0; i < 8; i++) {
    octets.unshift(int64 & 65535);
    int64 = int64 >> 16;
  }
  return octets.join(':');
};
console.log(int64ToIPv6(123464544));

//! convert Pascal string to into snake case
// ex.
// pascalToSnake('PascalCase') == 'pascal_case'
const pascalToSnake = (str) => {
  return str
    .replace(/([A-Z])/g, '_$1')
    .replace(/^_/, '')
    .toLowerCase();
};
console.log(pascalToSnake('PascalCase'));
console.log(pascalToSnake('App7Test'));

//! convert Wikipedia ROT13 string to normal string
const rot13 = (str) => {
  const rot = (char) => {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
    } else {
      return char;
    }
  };
  return str.replace(/[A-Za-z]/g, rot);
};
console.log(rot13('SERR PBQR PNZC'));

// or
const rot13_1 = (str) => {
  let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return str.replace(/[A-Za-z]/g, (char) => output[input.indexOf(char)]);
};
console.log(rot13_1('SERR PBQR PNZC'));

//! check only character in string
const isOnlyCharacter = (str) => {
  return /^[^\d]+$/.test(str);
};
console.log(isOnlyCharacter('abc'));
console.log(isOnlyCharacter('abc123'));

const list = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
  }
];

const isEqual = (first, second) => {
  return JSON.stringify(first) === JSON.stringify(second);
};

const result = list.some((e) =>
  isEqual(e, {
    name: 'John Doe',
    email: 'john.doe@example.com'
  })
);

console.log(result); // true

//! Write a function 'code' that takes a string and returns a new string, where all input string characters are replaced according to the following rules:
// If the character appears only once in the input string, replace it with 'x';
// If the character appears several times in the input string, replace it with 'y';
// the function should be case insensitive

function changeWord(word) {
  const regex = /[A-Za-z]/g;
  const result1 = word.match(regex);
  const obj = {};
  result1.forEach((char) => {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });
  return word.replace(regex, (char) => {
    if (obj[char] === 1) {
      return 'x';
    } else {
      return 'y';
    }
  });
}
console.log(changeWord('abbccdd'));

// Shift elements of the array to the right by K positions
function CyclicRotation(A, K) {
  let result2 = new Array(A.length);
  for (let i = 0; i < result2.length; i++) {
    result2[(i + K) % A.length] = A[i];
  }
  return result2;
}

console.log(CyclicRotation([7, 2, 8, 3, 5], 2));

console.log(CyclicRotation([7, 2, 8, 3, 5], 5));

console.log(CyclicRotation([7, 2, 8, 3, 5], 10));

// Complete an implementation of a function solution, that should return a
// string describing first character of the given string: "digit" for a digit, "lower"
// for a lowercase letter, "upper" for an uppercase letter and "other" for other
// characters. You can assume the characters are ASCII.

function firstChar(s) {
  /* Checking if the string contains a digit. */
  if (s.match(/[\d]/)) return 'digit';
  else if (s.match(/[a-z]/)) return 'lower';
  else if (s.match(/[A-Z]/)) return 'upper';
  else return 'other';
}
console.log(firstChar('12345'));
console.log(firstChar('{}'));
console.log(firstChar('abc'));
console.log(firstChar('Abc'));

// Write a function:
// function binary(A, B);
// that, given two non-negative integers A, B. returns the number of bits set to 1 in the binary representation of the number A, B.
// For example.
// binary(3, 5) == 1
// binary(3, 7) == 3
// Assume that A and B are integers within the range [0..100,000,000].
// the function binary focus on correctness. The performance of function will not be the focus of the assessment.

function binary(A, B) {
  return A & B;
}
console.log(binary(3, 5));
console.log(binary(3, 7));

// function solution(A, K);
// This function, given a non-empty array A of N integers (sorted in non-decreasing order) and integer K, checks whether A contains numbers 1, 2, ..., K (every number from 1 to K at least once) and no other numbers.
// For example.
// function solution([1, 1, 2, 3, 3], 3) ==> true
// function solution([1, 1, 3], 2) ==> false
// Assume that: N and K are integers within the range [1.300,000);
// each element of array A is an integer within the range [0.. 1,000,000,000];
// array A is sorted in non-decreasing order.
// the function should return true or false.
function solution1(A, K) {
  let set = new Set();
  for (let i = 1; i <= K; i++) {
    set.add(i);
  }
  for (const element of A) {
    if (!set.has(element)) return false;
  }
  return true;
}
console.log(solution1([1, 1, 2, 3, 3], 3));
console.log(solution1([1, 1, 3], 2));

/*
Write a function with an integer N, returns the maximum possible value obtainable by deleting one 5 digit from the decimal number N.
N is not content number 5 if N is content one number 5.
N output consists of at least two digits.
Examples:
function deleteNumber(15958) === 1958
function deleteNumber(-5859) === -589
function deleteNumber(-5000) === 0
function deleteNumber(0) === 0
N is an integer within the range [-999,995..999,995];
the function deleteNumber focus on correctness. The performance of function deleteNumber will not be the focus on
*/

const deleteNumber = (N) => {
  let n = N.toString();
  let count1 = 0;
  for (let i = 0; i < N; i++) {
    if (i === '5') count1++;
  }
  if (count1 === 0) return N;
  let result1 = '';
  for (const element of n) {
    if (element === '5') {
      if (count1 > 1) {
        result1 += '5';
        count1--;
      }
    } else {
      result1 += element;
    }
  }
  return Number(result1) === 0 ? 0 : result1;
};
console.log(deleteNumber(15958));
console.log(deleteNumber(-5859));
console.log(deleteNumber(-5000));
console.log(deleteNumber(0));
