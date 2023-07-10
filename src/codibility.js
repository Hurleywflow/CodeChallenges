//! TapeEquilibrium
function TapeEquilibrium(A) {
  let leftSum = A[0];
  let rightSum = 0;
  A.slice(1).forEach((number) => (rightSum += number));

  let diff = Math.abs(leftSum - rightSum);
  // skip position 0 because it is already checked
  // do not check the last position (length -1) because it is right part of the sum array
  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    let currentDiff = Math.abs(leftSum - rightSum);
    if (diff > currentDiff) diff = currentDiff;
  }
  return diff;
}

console.log(TapeEquilibrium([3, 1, 2, 4, 3]));

//! missing number of an array
// https://app.codility.com/demo/results/trainingQZQZQ7-ZQS/
// empty an array  = 1

function PermMissingElem(A) {
  let actualSum = 0;
  A.forEach((number) => (actualSum += number));

  let maxNumber = A.length + 1;
  let expectedSum = (maxNumber * (maxNumber + 1)) / 2;

  return expectedSum - actualSum;
}

console.log(PermMissingElem([2, 3, 1, 5]));

console.log(PermMissingElem([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(PermMissingElem([]));

//! s is input string brackets
// return 1 if brackets are balanced, 0 if not

const Brackets = (S) => {
  let stack = [];
  for (const c of S) {
    if (c === '{' || c === '[' || c === '(') {
      stack.push(c);
    } else if (c === '}') {
      if (stack.length === 0 || stack.pop() !== '{') return 0;
    } else if (c === ']') {
      if (stack.length === 0 || stack.pop() !== '[') return 0;
    } else if (c === ')') {
      if (stack.length === 0 || stack.pop() !== '(') return 0;
    }
  }
  return stack.length ? 0 : 1;
};

console.log(Brackets('()[]{}()[]{}'));

console.log(Brackets('([{}])'));

console.log(Brackets('()]]'));

console.log(Brackets('([)]'));

//! A and B input are array of the directions and the weight of fish

function Fish(A, B) {
  let stack = [];
  let survivors = 0;
  for (let i = 0; i < A.length; i++) {
    let weight = A[i];
    if (B[i] === 1) {
      stack.push(weight);
    } else {
      let weightDown = stack.length === 0 ? -1 : stack.pop();
      while (weightDown !== -1 && weightDown < weight)
        weightDown = stack.length === 0 ? -1 : stack.pop();
      if (weightDown === -1) survivors += 1;
      else stack.push(weightDown);
    }
  }
  return survivors + stack.length;
}

console.log(Fish([4, 8, 2, 6, 7], [0, 1, 1, 0, 0]));

console.log(Fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));

//! This is the NumberOfDiscIntersections for Sorting > NumberOfDiscIntersections

function NumberOfDiscIntersections(A) {
  let len = A.length;
  let discHistory = new Array(len * 2);
  let j = 0;
  for (let i = 0; i < len; i++) {
    discHistory[j++] = new DiscLog(i - A[i], 1);
    discHistory[j++] = new DiscLog(i + A[i], -1);
  }
  discHistory.sort(compare);
  let intersections = 0;
  let activeIntersections = 0;
  for (const log of discHistory) {
    activeIntersections += log.startEnd;
    if (log.startEnd > 0) intersections += activeIntersections - 1;
    if (intersections > 10000000) return -1;
  }
  return intersections;
}

function compare(a, b) {
  return a.x !== b.x ? a.x - b.x : b.startEnd - a.startEnd;
}

class DiscLog {
  constructor(x, startEnd) {
    this.x = x;
    this.startEnd = startEnd;
  }
}

console.log(NumberOfDiscIntersections([1, 5, 2, 1, 4, 0]));

//! This is the alternate NumberOfDiscIntersectionsAlt for Sorting > NumberOfDiscIntersections

function indexLessThan(sortedDiskList, i, start, last) {
  let mid = Math.trunc(start + (last - start) / 2);
  if (last <= start && sortedDiskList[mid].start > i) return mid - 1;
  if (last <= start) return mid;
  if (sortedDiskList[mid].start > i)
    return indexLessThan(sortedDiskList, i, start, mid - 1);
  else return indexLessThan(sortedDiskList, i, mid + 1, last);
}

function NumberOfDiscIntersectionsAlt(A) {
  let len = A.length;
  let discs = new Array(len);
  for (let i = 0; i < len; i++) {
    discs[i] = new Disc(i - A[i], i + A[i]);
  }
  discs.sort((a, b) => a.start - b.start);
  let total = 0;
  for (let i = 0; i < len; i++) {
    total += indexLessThan(discs, discs[i].end + 0.5, 0, len - 1) - i;
    if (total > 10000000) return -1;
  }
  return total;
}

class Disc {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

console.log(NumberOfDiscIntersectionsAlt([1, 5, 2, 1, 4, 0]));

// This is the Flags for Primes And Composite > Flags

function Flags(A) {
  let peaks = new Array(A.length);
  let nextPeak = A.length;
  // move the peaks backwards to the beginning of the array
  peaks[A.length - 1] = nextPeak;
  for (let i = A.length - 2; i > 0; i--) {
    if (A[i - 1] < A[i] && A[i + 1] < A[i]) nextPeak = i;
    peaks[i] = nextPeak;
  }
  peaks[0] = nextPeak;

  let current_guess = 0;
  let next_guess = 0;
  while (canPlaceFlags(peaks, next_guess)) {
    current_guess = next_guess;
    next_guess += 1;
  }
  return current_guess;
}

function canPlaceFlags(peaks, flagsToPlace) {
  let currentPosition = 1 - flagsToPlace;
  for (let i = 0; i < flagsToPlace; i++) {
    if (currentPosition + flagsToPlace > peaks.length - 1) return false;
    currentPosition = peaks[currentPosition + flagsToPlace];
  }
  return currentPosition < peaks.length;
}

console.log(Flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));

//! This is the alternate FlagsFaster for Primes And Composite > Flags

function FlagsFaster(A) {
  let nextPeak = A.length;
  let peaks = new Array(A.length);
  peaks[A.length - 1] = nextPeak;
  for (let i = A.length - 2; i > 0; i--) {
    if (A[i - 1] < A[i] && A[i + 1] < A[i]) nextPeak = i;
    peaks[i] = nextPeak;
  }
  peaks[0] = nextPeak;

  let upper_guess = Math.trunc(Math.sqrt(A.length) + 2);
  let lower_guess = 0;
  while (lower_guess < upper_guess - 1) {
    let current_guess = Math.trunc((lower_guess + upper_guess) / 2);
    if (canPlaceFlags1(peaks, current_guess)) lower_guess = current_guess;
    else upper_guess = current_guess;
  }

  return lower_guess;
}

function canPlaceFlags1(peaks, flagsToPlace) {
  let currentPosition = 1 - flagsToPlace;
  for (let i = 0; i < flagsToPlace; i++) {
    if (currentPosition + flagsToPlace > peaks.length - 1) return false;
    currentPosition = peaks[currentPosition + flagsToPlace];
  }
  return currentPosition < peaks.length;
}

console.log(FlagsFaster([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));

//! This is the CountDiv for Prefix Sums > Count Div

function CountDiv(A, B, K) {
  let nStart = Math.ceil(A / K);
  let nEnd = Math.floor(B / K);
  return nEnd - nStart + 1;
}

console.log(CountDiv(6, 11, 2));

//! This is the PassingCars for Prefix Sums > Passing Cars
// https://codility.com/programmers/task/passing_cars/

function PassingCars(A) {
  let suffixSum = new Array(A.length + 1).fill(0);
  let count = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    suffixSum[i] = A[i] + suffixSum[i + 1];
    if (A[i] === 0) count += suffixSum[i];
    if (count > 1000000000) return -1;
  }
  return count;
}

console.log(PassingCars([0, 1, 0, 1, 1]));

// This is the MaxProfit for Maximum Slice Problem > Max Profit

function MaxProfit(A) {
  let globalMaxSum = 0;
  let localMaxSum = 0;
  for (let i = 1; i < A.length; i++) {
    let d = A[i] - A[i - 1];
    localMaxSum = Math.max(d, localMaxSum + d);
    globalMaxSum = Math.max(localMaxSum, globalMaxSum);
  }
  return globalMaxSum;
}

console.log(MaxProfit([23171, 21011, 21123, 21366, 21013, 21367]));

//! Dominator
// https://app.codility.com/programmers/lessons/3-time_complexity/dominator/

function Dominator(A) {
  let consecutiveSize = 0;
  let candidate = 0;
  A.forEach((item) => {
    if (consecutiveSize === 0) {
      candidate = item;
      consecutiveSize += 1;
    } else if (candidate === item) {
      consecutiveSize += 1;
    } else {
      consecutiveSize -= 1;
    }
  });

  let occurrence = 0;
  let index = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      occurrence++;
      index = i;
    }
  }
  return occurrence > A.length / 2.0 ? index : -1;
}

console.log(Dominator([3, 0, 1, 1, 4, 1, 1]));
console.log(Dominator([1, 2, 3, 4, 5, 6, 7]));

/*
 MaxNonOverlappingSegments;
This is the MaxNonOverlappingSegments for Greedy algorithms > MaxNonOverlappingSegments
The problem is equivalent to the Activity Selection Problem,
where you have to choose the maximum non overlapping tasks.
*/

function MaxNonOverlappingSegments(A, B) {
  let lastEndSegment = -1;
  let chosenCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > lastEndSegment) {
      chosenCount++;
      lastEndSegment = B[i];
    }
  }
  return chosenCount;
}

console.log(MaxNonOverlappingSegments([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));

// This is the TieRopes for Greedy > TieRope

function TieRopes(K, A) {
  let count = 0;
  let ropeLength = 0;
  A.forEach((rope) => {
    ropeLength += rope;
    if (ropeLength >= K) {
      count++;
      ropeLength = 0;
    }
  });
  return count;
}

console.log(TieRopes(4, [1, 2, 3, 4, 1, 1, 3]));

//! This is the ChocolatesByNumbers for Euclidean Algorithms > ChocolatesByNumbers

function findGcd(a, b) {
  if (b === 0) return a;
  else return findGcd(b, a % b);
}

function ChocolatesByNumbers(N, M) {
  return N / findGcd(N, M);
}

console.log(ChocolatesByNumbers(10, 4));
console.log(ChocolatesByNumbers(9, 6));
console.log(ChocolatesByNumbers(10, 11));

// with x is the steeps for Frog cross river_positions
// with A is the array of positions
// index[0] is current position of Frog

function FrogRiverOne(X, A) {
  let river_positions = new Array(X + 1).fill(false);
  for (let time = 0; time < A.length; time++) {
    let pos = A[time];
    if (!river_positions[pos]) {
      river_positions[pos] = true;
      X -= 1;
      if (X === 0) return time;
    }
  }
  // can not reach to that position
  return -1;
}

console.log(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]));

console.log(FrogRiverOne(1, [1, 1, 1]));

console.log(FrogRiverOne(3, [1, 2, 1]));

// N is size of array A ;

function MaxCounters(N, A) {
  let counters = new Array(N).fill(0);
  let start_line = 0;
  let current_max = 0;
  A.forEach((instruction) => {
    let index = instruction - 1;
    if (instruction > N) start_line = current_max;
    else if (counters[index] < start_line) counters[index] = start_line + 1;
    else counters[index] += 1;
    if (instruction <= N && counters[index] > current_max)
      current_max = counters[index];
  });
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < start_line) counters[i] = start_line;
  }
  return counters;
}

console.log(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]));

//! This is the CountDistinctSlices for Caterpillar method > CountDistinctSlices

function CountDistinctSlices(M, A) {
  let totalSlices = 0;
  let inCurrentSlice = new Array(M + 1).fill(false);
  let head = 0;
  for (let tail = 0; tail < A.length; tail++) {
    while (head < A.length && !inCurrentSlice[A[head]]) {
      inCurrentSlice[A[head]] = true;
      totalSlices += head - tail + 1;
      head += 1;
      if (totalSlices > 1000000000) totalSlices = 1000000000;
    }
    inCurrentSlice[A[tail]] = false;
  }
  return totalSlices;
}

console.log(CountDistinctSlices(0, [0]));
console.log(CountDistinctSlices(6, [3, 4, 5, 5, 2]));
console.log(CountDistinctSlices(9, [2, 4, 1, 7, 4, 9, 7, 3, 5, 5, 8, 7, 1]));

//! This is the MinAbsSumOfTwo for Caterpillar method > MinAbsSumOfTwo

function MinAbsSumOfTwo(A) {
  let minAbsSumOfTwo = Number.MAX_SAFE_INTEGER;
  A.sort(function (a, b) {
    return a - b;
  });
  let head = 0;
  let tail = A.length - 1;
  while (head <= tail) {
    minAbsSumOfTwo = Math.min(minAbsSumOfTwo, Math.abs(A[head] + A[tail]));
    if (A[head] + A[tail] < 0) head++;
    else tail--;
  }
  return minAbsSumOfTwo;
}

console.log(MinAbsSumOfTwo([-7, 3, -1, 5, -11, 4, -9, 14, 17, -2])); //1
console.log(MinAbsSumOfTwo([8, 3, 5, 16, 11])); //6
console.log(MinAbsSumOfTwo([-7, -5, -6, -2, -9])); //4
console.log(MinAbsSumOfTwo([-7, 3, -6, 1, 0, -9])); //0
console.log(MinAbsSumOfTwo([-22, 3, 4, 5])); //6

// Shift elements of the array to the right by K positions
function CyclicRotation(A, K) {
  let result = new Array(A.length);
  for (let i = 0; i < result.length; i++) {
    result[(i + K) % A.length] = A[i];
  }
  return result;
}

console.log(CyclicRotation([7, 2, 8, 3, 5], 2));

console.log(CyclicRotation([7, 2, 8, 3, 5], 5));

console.log(CyclicRotation([7, 2, 8, 3, 5], 10));

// Complete an implementation of a function solution, that should return a
// string describing first character of the given string: "digit" for a digit, "lower"
// for a lowercase letter, "upper" for an uppercase letter and "other" for other
// characters. You can assume the characters are ASCII.

function firstChar(s) {
  if (typeof s !== 'string') {
    throw new Error('Invalid input: input must be a string.');
  }
  if (s.trim().length === 0) {
    throw new Error('Invalid input: input string must not be empty.');
  }

  if (/[0-9]/.test(s)) {
    return 'digit';
  } else if (/[a-z]/.test(s)) {
    return 'lower';
  } else if (/[A-Z]/.test(s)) {
    return 'upper';
  } else {
    return 'other';
  }
}

console.log(firstChar('12345'));
console.log(firstChar('{}'));
console.log(firstChar('abc'));
console.log(firstChar('Abc'));
// console.log(firstChar('   '));
// console.log(firstChar(''));

// Write a function:
// function binary(A, B);
// that, given two non-negative integers A and B, returns the number of bits set to 1 in the binary representation of the number A * B.
// For example, given A = 3 and B = 7 the function should return 3, because the binary representation of A * B = 3* 7 = 21 is 10101 and it contains three bits set to 1.
// Assume that A and B are integers within the range [0..100,000,000].
// the function binary focus on correctness. The performance of function will not be the focus of the assessment.
function binary(A, B) {
  let count = 0;
  let product = A * B;
  while (product > 0) {
    if (product & 1) count++;
    product >>= 1;
  }
  return count;
}
console.log(binary(3, 7));
console.log(binary(5, 5));

// function solution(A, K);
// This function, given a non-empty array A of N integers (sorted in non-decreasing order) and integer K, checks whether A contains numbers 1, 2, ..., K (every number from 1 to K at least once) and no other numbers.
// For example.
// function solution([1, 1, 2, 3, 3], 3) ==> true
// function solution([1, 1, 3], 2) ==> false
// Assume that: N and K are integers within the range [1.300,000);
// each element of array A is an integer within the range [0.. 1,000,000,000];
// array A is sorted in non-decreasing order.
// the function should return true or false.
// Assume that A and B are integers within the range [0..100,000,000].
// Counts the number of 1 bits in the product of A and B.
function binaryOne(A, B) {
  let count = 0;
  let product = A * B;
  // Continues looping while product is greater than 0
  while (product > 0) {
    // If the least significant bit is 1, increments the count
    if (product & 1) count++;
    // Shifts product right by 1, effectively dividing by 2
    product >>= 1;
  }
  return count;
}
// Logs the number of 1 bits in 3 * 7 = 21 which is 3
console.log(binaryOne(3, 7));
// Logs the number of 1 bits in 5 * 5 = 25 which is 2
console.log(binaryOne(5, 5));

// Checks if an array contains consecutive integers from 1 to K
function solution1(A, K) {
  let n = A.length;
  // Loops through array and checks if each element is 1 greater than the previous
  for (let i = 0; i < n; i++) {
    if (A[i] + 1 < A[i + 1]) return false;
  }
  // Checks if the first element is 1 and the last element is K
  return !(A[0] !== 1 && A[n] !== K);
}
// Returns true as [1, 1, 2, 3, 3] contains 1 to 3
console.log(solution1([1, 1, 2, 3, 3], 3));
// Returns false as [1, 1, 3] does not contain 2
console.log(solution1([1, 1, 3], 2));

// Write a function solution that, given an integer N, returns the maximum possible value obtainable by deleting one 5 digit from the decimal number N.
// N is not content number 5 if N is content one number 5.
// N output consists of at least two digits.
// Examples:
// function solution(15958) === 1958
// function solution(-5859) === -589
// function solution(-5000) === 0
// N is an integer within the range [-999,995..999,995];
// the function solution focus on correctness. The performance of function solution will not be the focus on

function solution(N) {
  // Checks if input N is within range [-999995, 999995]
  if (N < -999995 || N > 999995) {
    throw new Error('Invalid input: Number out of range [-999995, 999995]');
  }
  // Converts N to string
  let str = N.toString();
  // Splits string into array of characters
  let arr = str.split('');
  // Sets found to false
  let found = false;
  // Loops through array of characters
  for (let i = 0; i < arr.length; i++) {
    // Checks if current character is 5
    if (arr[i] === '5') {
      // Removes first occurrence of 5 from array
      arr.splice(i, 1);
      // Sets found to true
      found = true;
      // Breaks out of loop after first 5 is removed
      break;
    }
  }
  // Returns N if no 5 was found
  if (!found) {
    return N;
  }
  // Joins array back into string and converts to number
  let result = Number(arr.join(''));
  // Returns 0 if result is 0, else returns result
  return result === 0 ? 0 : result;
}

// Logs 1958
console.log(solution(15958));
// Logs -589
console.log(solution(-5859));
// Logs 0
console.log(solution(-5000));
// Logs 0
console.log(solution(0));
// Logs 555
console.log(solution(555));
// Logs 505
console.log(solution(505));



// Write a function 'code' that takes a string and returns a new string, where all input string characters are replaced according to the following rules:
// If the character appears only once in the input string, replace it with 'x';
// If the character appears several times in the input string, replace it with 'y';
// the function should be case insensitive
// Examples:
// changeWord('please') === 'xxyxxy';
// changeWord('case') === 'xxxx';
// changeWord('Times') === 'xxxxx';

const SINGLE_CHARACTER = 'x';
// Declare a constant to represent a single occurrence character

const MULTIPLE_CHARACTERS = 'y';
// Declare a constant to represent a multiple occurrence character

function encodeString(inputString) {
  // Define a function that takes an input string and returns an encoded string

  if (typeof inputString !== 'string' || inputString.length === 0) {
    throw new TypeError('Input parameter must be a non-empty string.');
  }
  // Validate the input parameter and throw an error if invalid

  inputString = inputString.toLowerCase();
  // Convert the input string to lowercase

  let encodedString = '';
  // Initialize an empty string to store the encoded string

  const characterFrequency = new Map();
  // Declare a Map to store the frequency of each character

  for (const character of inputString) {
    // Loop through each character of the input string

    characterFrequency.set(
      character,
      (characterFrequency.get(character) || 0) + 1
    );
    // Increment the frequency of the current character in the Map
  }

  for (const character of inputString) {
    // Loop through each character of the input string again

    if (characterFrequency.get(character) === 1) {
      encodedString += SINGLE_CHARACTER;
      // If the character occurs once, append 'x' to the encoded string
    } else {
      encodedString += MULTIPLE_CHARACTERS;
      // If the character occurs more than once, append 'y' to the encoded string
    }
  }

  return encodedString;
  // Return the encoded string
}

console.log(encodeString('please'));
console.log(encodeString('case'));
console.log(encodeString('Times'));
console.log(encodeString('Case'));
