/**
 * Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.
 * Sub Array is basically CONTIGUOUS
 */

const input = [4, 2, -3, 1, -50, 6]

/**
 * 
 * @param {Array} input 
 * @returns {Boolean}
 * 
 * Lets you know whether there is any zero sum subarray or not
 * 
 * T(n) = O(N)
 * 
 * S(n) = O(N)
 */
function zeroSumSubArray(input) {
  let sumMap = {}
  let sum = 0
  for (let index = 0; index < input.length; index++) {
    if( input[ index ] === 0 ) return true
    sum += input[ index ]
    if(sumMap[sum]) return true
    sumMap[sum] = 1
  }
  return false
}

console.log('SubArray Exists? ', zeroSumSubArray(input))