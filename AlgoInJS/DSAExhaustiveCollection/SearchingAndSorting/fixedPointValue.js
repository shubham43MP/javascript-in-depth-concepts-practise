/**
 * Given an array Arr of N positive integers.
 * Your task is to find the elements whose value is equal to that of its index value.
 *
 * T(n) = O(N)
 * S(n) = O(1)
 */

 class Solution {
  fixedPointValue(input, n) {
    for (let i = 0; i < n; i++) {
      if(input[i] === i + 1) return i + 1
    }
    return []
  }
}


const solution = new Solution()
// const input = [15, 2, 45, 12, 7] // 2
const input = [1]
const n = input.length
console.log('Fixed point value is => ', solution.fixedPointValue(input, n))
