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

console.log('FINALITY ==> ', bestTimeToBuyAndSellAndMaxPrice(prices))