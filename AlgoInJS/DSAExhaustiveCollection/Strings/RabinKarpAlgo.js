/**
 * Pattern for string matching
 *
 * T(n) = O(N2)
 * S(n) = O(1)
 */

 class Solution {
  naiveStringMatching(input, pattern) {
    const patternLength = pattern.length
    for (let k = 0; k < input.length; k++) {
      let end = k + patternLength - 1
      if(input.substring(k, end + 1) === pattern) {
        console.log('Desired index => ', k)
      }
    }
  }
}


const solution = new Solution()

/**
 * TCs
 */

// const input = "THIS IS A TEST TEXT"
// const pattern = "TEST" // 10


const input = "AABAACAADAABAABA"
const pattern = "AABA" // 10
solution.naiveStringMatching(input, pattern)
