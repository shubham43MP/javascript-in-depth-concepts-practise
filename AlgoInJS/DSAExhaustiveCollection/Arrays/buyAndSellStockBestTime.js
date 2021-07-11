/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
[LEET CODE]
 */

const prices = [7,1,5,3,6,4]


// Brute Force T(n) = N*N
function bestTimeToBuyAndSellAndMaxPrice(prices) {
  let maxProf = 0
  for (let index = 0; index < prices.length - 1; index++) {
    for (let innerIndex = index + 1; innerIndex < prices.length; innerIndex++) {
        const prof =  prices[innerIndex] - prices[index]
        if(prof > maxProf) maxProf = prof
        else continue
    }    
  }
  return maxProf
}

// Efficient method
// We will first find difference between each element and then use Kadane's Algo to find the max sum contiguous array
// SIMULTANEOOUSLY
// T(n) = N


function bestTimeToBuyAndSellMaxPriceViaKadane(prices) {
  // We will transform current array to difference array
  let contiguousStart = 0;
  let contiguousEnd = 0;
  let max_so_far = 0;
  let max_end_here = 0;

  // Kadane's Algorithm Maneuver
  for (let index = 0; index < prices.length; index++) {
    prices[index] = prices[ index + 1 ] - prices[ index ]
    if(prices[index]){
      max_end_here = max_end_here + prices[index];
      if(max_end_here < 0) {
        contiguousStart = index + 1
        max_end_here = 0
      }
      if(max_so_far < max_end_here){
        max_so_far = max_end_here
        contiguousEnd = index
      }
    }
  }
  const startIndex = contiguousStart
  const endIndex = contiguousEnd + 1
  return max_so_far
}

console.log('Maximum Profit is ==> ', bestTimeToBuyAndSellMaxPriceViaKadane(prices))