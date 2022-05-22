/*
Create a function that will convert from Celsius to Fahrenheit
*/
const convertToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};
console.log(convertToFahrenheit(0));

/*
Create a function that will convert from Fahrenheit to Celsius
*/
const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};
console.log(convertToCelsius(32));

//! faro shuffle
/*
To faro shuffle a deck of playing cards is to split the deck exactly in half, then perfectly interweave the cards, such that the original top and bottom cards are unchanged.

Write a function that accepts a even-numbered list and faro shuffles the indices.
Ex.
  faroShuffleDeckOfCards(['ace', 'two', 'three', 'four', 'five', 'six']) == ['ace', 'four', 'two', 'five', 'three', 'six']
*/
const faroShuffleDeckOfCards = (deck) => {
  let newDeck = [];
  let halfDeck = deck.length / 2;
  console.log(halfDeck);
  for (let i = 0; i < halfDeck; i++) {
    newDeck.push(deck[i]);
    // initial i + halfDeck == 0 + 3 == 3 in index of deck 'four'
    newDeck.push(deck[i + halfDeck]);
  }
  return newDeck;
};
console.log(
  faroShuffleDeckOfCards(['ace', 'two', 'three', 'four', 'five', 'six'])
);

//! pyramid
/*
Write a function that will draw a pyramid. The function should take one integer parameter that will describe how many lines tall the pyramid should be.
Ex.
  pyramid(3) ==  *\n***\n*****

*/
const pyramid = (lines) => {
  let rows = Array(lines)
    .fill('')
    .map((_, index) => {
      return Array((index + 1) * 2 - 1)
        .fill('*')
        .join('');
    });
  return rows.join('\n');
};
console.log(pyramid(3));

//! what century is this?
/*
Write a function that will return an inputted numerical year in century format. The output should have the appropriate written ending ('st','nd','rd','th') as well.
Ex.
  century(2000) == '21st'
  century(1124) == '12th'
  century(2259) == '23rd'
*/

const century = (year) => {
  let centuryMath = Math.floor(year / 100) + 1;
  let ending = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th',
    5: 'th',
    6: 'th',
    7: 'th',
    8: 'th',
    9: 'th'
  };
  let endingNum = centuryMath % 10;
  let endingString = ending[endingNum];
  return centuryMath + endingString;
};
console.log(century(2000));
console.log(century(1124));
console.log(century(2259));

//! a Pile of Cubes
/*
Your challenge is to construct a building which will be made of a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top with a volume of 1^3.
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
The parameter of the function f will be an integer m and you have to return the integer n (such as n^3 + (n-1)^3 + ... + 1^3 = m) or 0 if there is no such n.
Ex.
  findNb(1071225) == 45
  findNb(91716553919377) == 0

*/

const findNb = (m) => {
  let n = 0;
  let volume = 0;
  while (volume < m) {
    volume += Math.pow(n, 3);
    n++;
  }
  return volume === m ? n - 1 : 0;
};
console.log(findNb(1071225));
console.log(findNb(91716553919377));

//! Coffee Shop
/*
Bob's coffee shop is really busy, so busy in fact that if you do not have the right amount of change, you won't get your coffee as Bob doesn't like waiting for people to sort change. Drinks avaialble are Americano £2.20, Latte £2.30, Flat white £2.40 and Filter £3.50.
Write a function that returns, "Here is your "+type+", have a nice day!" if they have the right change or returns "Sorry, exact change only, try again tomorrow!"
*/
const coffeeShop = (type, change) => {
  let prices = {
    americano: 2.2,
    latte: 2.3,
    flatWhite: 2.4,
    filter: 3.5
  };
  let price = prices[type];
  return change === price
    ? `Here is your ${type}, have a nice day!`
    : 'Sorry, exact change only, try again tomorrow!';
};
console.log(coffeeShop('americano', 2.2));
console.log(coffeeShop('latte', 2.4));

//! Smelting Iron Ingots
/*
Minecraft has gotten to be a very popular game. No doubt many reading this have played it themselves or watched someone else. In Minecraft, collected ore must be smelted in a furnace to change the resource into a usable form.

Each ingot takes 11 seconds to produce. Steve has the following fuel options to add to the furnace:

Buckets of lava, each lasts 800 seconds
Blaze rod, each lasts 120 seconds
Coals, each lasts 80 seconds
Blocks of Wood, each lasts 15 seconds
Sticks, each lasts 1 second*

Write a function that calculates the minimum amount of fuel needed to produce a certain number of iron ingots.
smeltingIronIngots(ingots) == {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0}
*/

const smeltingIronIngots = (ingots) => {
  let needed = ingots * 11;
  const types = [
    {name: 'lava', time: 800},
    {name: 'blazeRod', time: 120},
    {name: 'coal', time: 80},
    {name: 'wood', time: 15},
    {name: 'stick', time: 1}
  ];
  return types.reduce((acc, type) => {
    let amount = Math.floor(needed / type.time);
    needed -= amount * type.time;
    return {...acc, [type.name]: amount};
  }, {});
};
console.log(smeltingIronIngots(100));

//! Snail Sort
/*
Given an array of n * x, return the array elements arranged from outermost elements to the middle element, traveling clockwise. Do not sort the elements from lowest to highest, instead traverse the 2-D array in a clockwise, snailshell pattern.

Ex.
snailSort([[1,2,3], [8,9,4], [7,6,5]])  == [1,2,3,4,5,6,7,8,9]
snailSort([[]])  == []
snailSort([[1]])  == [1]
*/
const snailSort = (array) => {
  let result = [];
  while (array.length) {
    result = result.concat(array.shift());
    array.forEach((row) => {
      result.push(row.pop());
    });
    if (array.length) {
      result = result.concat(array.pop().reverse());
    }
  }
  return result;
};
console.log(
  snailSort([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ])
);
console.log(snailSort([[]]));
console.log(snailSort([[1]]));

//! two sum
/*
Write a function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. The numbers may be added in any order.

  For example, given an array of [1, 2, 3] and a target of 4, the function should return either [1, 3] or [2, 2].

  Ex.
  twoSum([1, 2, 3], 4) == [1, 3]
  twoSum([1, 2, 3], 6) == [2, 3]
  twoSum([1, 2, 3], 10) == []
  */

const twoSum = (array, target) => {
  let result = [];
  array.forEach((num, i) => {
    let otherNum = target - num;
    if (array.indexOf(otherNum) !== -1 && array.indexOf(otherNum) !== i) {
      result = [otherNum, num];
    }
  });
  return result;
};
console.log(twoSum([1, 2, 3], 4));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([1, 2, 3], 5));
// console.log(twoSum([1, 2, 3], 10));

//! or two sums return in index
const twoSumInIndex = (array, target) => {
  let result = [];
  array.forEach((num, i) => {
    let otherNum = target - num;
    if (array.indexOf(otherNum) !== -1 && array.indexOf(otherNum) !== i) {
      result = [array.indexOf(otherNum), i];
    }
  });
  return result;
};
console.log(twoSumInIndex([1, 2, 3], 4));
console.log(twoSumInIndex([2, 7, 11, 15], 9));

//! longest common Prefix
/*
Write a function that takes in two strings and returns the longest common prefix.
Ex.
longestCommonPrefix(['flower', 'flow', 'flight']) == 'fl'
*/
console.time('label');
const longestCommonPrefix = (array) => {
  let prefix = '';
  let first = array[0];
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    if (array.every((word) => word[i] === letter)) {
      prefix += letter;
    } else {
      break;
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.timeEnd('label');

//! write the function solution that returns a sorted array containing the square of those integers
// Ex.
// sortedSquareArray([-6,-4,1,2,3,5]) == [1,4,9,16,25]

const sortedSquareArray = (array) => {
  let result = [];
  array.forEach((num) => {
    result.push(Math.pow(num, 2));
  });
  return result.sort((a, b) => a - b);
};
console.log(sortedSquareArray([-6, -4, 1, 2, 3, 5]));

//! factorize the number
// Ex.
// factorize(5) == 120

const factorize = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorize(5));

// find the max number of inner an array to return those to an array
// Ex.
// findMax([[1,2,3], [4,5,6], [7,8,9]]) == [3,6,9]

const findMax = (array) => {
  let result = [];
  array.map((row) => {
    result.push(Math.max(...row));
  });
  return result;
};
console.log(
  findMax([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

//! confirm the ending of the string
// Ex.
// confirmEnding("Bastian", "n") == true

const confirmEnding = (str, target) => {
  return str.slice(str.length - target.length) === target;
};
console.log(confirmEnding('Bastian', 'n'));

//or
const confirmEnding1 = (str, target) => {
  return str.endsWith(target);
};
console.log(confirmEnding1('Bastian', 'n'));

//! repeat a string
// Ex.
// repeatStringNumTimes("*", 3) == ***

const repeatStringNumTimes = (str, num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};
console.log(repeatStringNumTimes('*', 3));
//or
const repeatStringNumTimes1 = (str, num) => {
  return str.repeat(num);
};
console.log(repeatStringNumTimes1('*', 3));

//! truncate a string
// Ex.
// truncateString("A-tisket a-tasket A green and yellow basket", 11) == A-tisket...
// truncateString("Pet", 3) == Pet...

const truncateString = (str, num) => {
  if (num <= 3) {
    return str.slice(0, num) + '...';
  }
  return str.slice(0, num - 3) + '...';
};
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncateString('Pet', 3));

//! Roman Number Converter
// Ex.
// convertToRoman(36) == "XXXVI"
// convertToRoman(12) == "XII"
// convertToRoman(1450) == "MCDL"

const convertToRoman = (num) => {
  let result = '';
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (let key in roman) {
    while (num >= roman[key]) {
      result += key;
      num -= roman[key];
    }
  }
  return result;
};
console.log(convertToRoman(36));
console.log(convertToRoman(3));

//! even ladder pattern
// Ex.
// evenLadder([2]) == 22
// evenLadder([4]) == 22 \n 4444
// evenLadder([6]) == 22 \n 4444 \n 666666
// evenLadder([8]) == 22 \n 4444 \n 88888888

const evenLadder = (num) => {
  let result = '';
  for (let i = 2; i <= num; i += 2) {
    result += i.toString().repeat(i);
    if (i !== num) {
      result += '\n';
    }
  }
  return result;
};
console.log(evenLadder([2]));
console.log(evenLadder([4]));
console.log(evenLadder([6]));

//! Find index of middle values an array
// Ex.
// findIndexValue([15,25,55]) == 1
// findIndexValue([99,75,49]) == 0

function findIndexValue(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== max && array[i] !== min) {
      return i;
    }
  }
  return -1;
}
console.log(findIndexValue([15, 25, 55]));
console.log(findIndexValue([75, 99, 49]));

//! find Stray values in an array
// Ex.
// findStrayValues([1,1,1,2,2,3]) == [3]
// findStrayValues([1,1,1,2,2,2]) == []
// findStrayValues(['woo', 'woo', 'woo', 'woowoo']) == ['woowoo']

const findStrayValues = (array) => {
  for (const element of array) {
    if (array.indexOf(element) === array.lastIndexOf(element)) {
      return [element];
    }
  }
  return [];
};
console.log(findStrayValues([1, 1, 1, 2, 2, 3]));
console.log(findStrayValues([1, 1, 1, 2, 2, 2]));
console.log(findStrayValues(['woo', 'woo', 'woo', 'woowoo']));

//! find unique numbers from string input and return that index. the unique number will differ in evenness
// Ex.
// findUniqueNumbers('2 4 7 8 10') === 2 //index of unique number
// findUniqueNumbers('37 91 117 75 87 78 21') === 5 //index of unique number

const findUniqueNumbers = (str) => {
  let array = str.split(' ');
  let even = [];
  let odd = [];
  for (const element of array) {
    element % 2 === 0 ? even.push(element) : odd.push(element);
  }
  if (even.length === 1) {
    return array.indexOf(even[0]);
  }
  if (odd.length === 1) {
    return array.indexOf(odd[0]);
  }
  return -1;
};
console.log(findUniqueNumbers('2 4 7 8 10'));
console.log(findUniqueNumbers('37 91 117 75 87 78 21'));

//! insert Dashes into even numbers from parameter input. return a string with dashes inserted between even numbers
// Ex.
// insertDashes(553847) == 5538-47
// insertDashes(2468) == 2-4-6-8

const insertDashes = (num) => {
  let result = '';
  let array = num.toString().split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
      result += array[i] + '-';
    } else {
      result += array[i];
    }
  }
  return result;
};
console.log(insertDashes(553847));
console.log(insertDashes(2468));

//! find longest words in a string
// Ex.
// findLongestWords('The quick brown fox jumped over the lazy dog.') == jumped

const findLongestWords = (str) => {
  let longestWord = '';
  let longestWordArray = str.split(' ');
  for (const element of longestWordArray) {
    if (longestWord.length < element.length) {
      longestWord = element;
    }
  }
  return longestWord;
};
console.log(findLongestWords('The quick brown fox jumped over the lazy dog'));

//! acceptable sequences of the characters in a string. That character is surrounded by plus '+' symbols
// Ex.
// acceptableSequences('++a+b+c++') == true
// acceptableSequences('a+b+c+d+x+y+z') == false

const acceptableSequences = (str) => {
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[i].toUpperCase()) {
      flag = str[i - 1] === '+' && str[i + 1] === '+';
    }
  }
  return flag;
};
console.log(acceptableSequences('++a+b+c++'));
