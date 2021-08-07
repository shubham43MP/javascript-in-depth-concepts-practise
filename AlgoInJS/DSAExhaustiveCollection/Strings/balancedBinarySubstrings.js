/**
 * Split the binary string into substrings with equal number of 0s and 1s
 * Input: str = “0100110101”
 * Output: 4
 * The required substrings are “01”, “0011”, “01” and “01”.
 * T(n) = O(N)
 * S(n) = O(1)
 */

 class Solution {
  balancedBinarySubstrings(input) {
    let zeroTracker = 0
    let balanceCount = 0
    for (let k = 0; k < input.length; k++) {
      const element = parseInt(input[k], 10);
      if(element === 0 ) {
        zeroTracker++
      } else if( element === 1) {
        zeroTracker--
      }
      if(zeroTracker === 0) balanceCount++
    }
    if(balanceCount === 0) balanceCount = -1
    return balanceCount
  }
}


const solution = new Solution()
solution.balancedBinarySubstrings('0000000000')
