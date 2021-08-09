/**
 * Microsoft
 * Minimise the cost of word wrap
 *
 * https://practice.geeksforgeeks.org/problems/word-wrap1646/1
 */

/**
 * Minimise the cost of word wrap
 *
 * https://practice.geeksforgeeks.org/problems/word-wrap1646/1
 *
 * T(n) = O(n2)
 * S(n) = O(n)
 *
 * We will come back to this in DP
 */

 class Solution {
  wordWrap(nums, k) {
    // nums.sort( (a,b) => a - b ) // O(N*LogN) --> Can use merge sort here
    let totalCost = 0
    let localCost = k
    let fittedInARow = 0
    console.log('numssss', nums)
    for (let j = 0; j < nums.length; j++) {
      const element = nums[j]
      console.log('sasas', element, localCost- fittedInARow, fittedInARow, j)
      if( element <= localCost - fittedInARow  ) {
        localCost = localCost - element
        fittedInARow++
        continue
      }
      totalCost += Math.pow((localCost - fittedInARow + 1), 2)
      console.log('totalCose', totalCost)
      localCost = k
      fittedInARow = 0
      j--
    }
    // if(fittedInARow !== 0) totalCost += Math.pow((localCost - fittedInARow + 1), 2)
    console.log('Total Cost ==> ', totalCost)
  }
}


const solution = new Solution()
const nums = [3,2,2,5]
const k = 6 // Ans: 10
// const nums = [3,2,2]
// const k = 4
solution.wordWrap(nums, k)
