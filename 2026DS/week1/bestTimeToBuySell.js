/*
Example 1:

Input: prices = [7,1,5,3,6,4]
[-6, 4,-2, 3, -2]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function buySellAtRightTime(arr) {
  const kadaneOP = [];
  for(let i = 0; i < arr.length - 1; i++) {
    kadaneOP.push(arr[i+1] - arr[i])
  }
  let max_so_far = -100;
  let max_end_here = 0;

  const length = kadaneOP.length

  for(let i = 0; i < kadaneOP.length; i++) {
    max_end_here +=  kadaneOP[i];
    if(max_end_here > max_so_far) {
      max_so_far = max_end_here;
    }

    if(max_end_here < 0) {
      max_end_here = 0
    }
  }
  return max_so_far
}

console.log('111111', buySellAtRightTime([7,1,5,3,6,4]))
