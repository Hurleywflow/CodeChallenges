/**
Trading data
two trading systems that operate within their bank, systemA & systemB
The data available consists of two lists representing total number of trades on a given day by each system.
Sam needs to produce a list of integers that shows, for the trades systemB performs on any given day, how many days did systemA perform less than or equal that number of trades.
Example
systemA = [2, 4, 6]
systemB = [4, 7]
System A has traded on 3 occasions and made 2, 4, 6 trades on each day respectively
System B has traded on 2 occasions and made 4, 7 trades on each day respectively.
For System B's first day of trading System A has 2 days with the same of fewer trades, 2 & 4.
For System B's second day of trading System A has 3 days with the same of fewer trades, 2, 4 & 6.
The function should therefore return [2, 3]

function tradeCounts([2,7,4,8], [6,10]) ===> [2,3]
function tradeCounts([5,19,9,8,16], [6,3,15,16]) ===> [1,0,3,4]
*/
function tradeCounts(systemA, systemB) {
  let result = [];
  for (const element of systemB) {
    let count = 0;
    for (const element2 of systemA) {
      if (element2 <= element) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
console.log(tradeCounts([2, 7, 4, 8], [6, 10]));
console.log(tradeCounts([5, 19, 9, 8, 16], [6, 3, 15, 16]));
